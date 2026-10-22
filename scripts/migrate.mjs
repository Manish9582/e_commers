
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "node:fs/promises";
import path from "node:path";

dotenv.config({ path: ".env.local" });

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 2,
    waitForConnections: true,
});

async function migrate() {
    try {
        await connect.execute(`CREATE TABLE IF NOT EXISTS scheme_migration(
             table_name VARCHAR(255) PRIMARY KEY,
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`)

        const folder = path.join(process.cwd(), "migration");
        const files = (await fs.readdir(folder)).sort()


        for (const file of files) {
            const [row] = await connect.execute("SELECT table_name From scheme_migration WHERE table_name = ?", [file]);
            if (row.length > 0) continue;

            const sql = await fs.readFile(path.join(folder, file), 'utf-8');
            await connect.query(sql)
            
            await connect.execute(
                "INSERT INTO scheme_migration (table_name) VALUES (?)",
                [file]
            );

        }
    } catch (error) {
        console.error("Migration failed:", error.message);
        process.exitCode = 1;
    } finally {
        await connect.end();
    }
}

migrate();
