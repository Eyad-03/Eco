CREATE TABLE users (
    userid SERIAL PRIMARY KEY,
    
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    
    role VARCHAR(50) DEFAULT 'user',
    
    refresh_token TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    catid SERIAL PRIMARY KEY,
    
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu (
    menuid SERIAL PRIMARY KEY,
    

    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    

    catid INTEGER REFERENCES categories(catid) ON DELETE SET NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


