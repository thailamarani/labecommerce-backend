-- Active: 1679959762989@@127.0.0.1@1433
CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users(id, email, password)
VALUES
("u100", "user100@email.com", "pw100"),
("u200", "user200@email.com", "pw200"),
("u300", "user300@email.com", "pw300");

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products(id, name, price, category)
VALUES
("p010", "Crocs", 19, "Sapatos"),
("p020", "Moletom", 22, "Roupas"),
("p030", "Cropped", 11, "Roupas"),
("p040", "Colar", 7, "Acessórios"),
("p050", "Brinco", 6, "Acessórios");

DROP TABLE products;