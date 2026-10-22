
CREATE TABLE IF NOT EXISTS shopkeepers (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(191) NOT NULL UNIQUE,
    phone VARCHAR(20) UNIQUE,
    shop_name VARCHAR(150) NOT NULL,
    shop_slug VARCHAR(180) NOT NULL UNIQUE,
    shop_address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    status ENUM(
        'pending',
        'approved',
        'rejected',
        'suspended'
    ) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
