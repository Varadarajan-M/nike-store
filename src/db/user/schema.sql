
-- Define the users table
-- @block
CREATE TABLE users(
    id INT AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255),
    provider ENUM('credentials','google') DEFAULT 'credentials' NOT NULL,
    google_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY(id),
    CHECK ((provider = 'credentials' AND password IS NOT NULL AND google_id IS NULL) OR (provider = 'google' AND password IS NULL AND google_id IS NOT NULL))
);

-- Show all tables
-- @block
DROP TABLE users