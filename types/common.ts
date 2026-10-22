export type ConnectType = {
  host: string;
  password: string;
  port: number;
  user: string;
  database: string;
  connectionLimit: number;
  waitForConnections: boolean;
};
