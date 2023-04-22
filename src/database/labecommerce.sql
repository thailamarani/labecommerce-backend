-- Active: 1681841446584@@127.0.0.1@3306

CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    created_at TEXT,
    buyer_id TEXT NOT NULL,
    FOREIGN KEY (buyer_id) REFERENCES users (id)
);

INSERT INTO users
VALUES 
("u003", "Thaila", "thaila@email.com", "senhathaila"),
("u004", "Leonardo", "leonardo@email.com", "senhaleo"),
("u005", "Fred", "fred@email.com", "senhafred");

INSERT INTO products
VALUES
("p003", "Tênis", "50", "Calçados", "Feminino", "https://static.zattini.com.br/produtos/tenis-chunky-zatz-plataforma-basico-feminino/14/G52-0786-014/G52-0786-014_zoom6.jpg"),
("p004", "Camiseta", "30", "Roupas", "Masulino", "https://img.elo7.com.br/product/zoom/20FD1F8/camiseta-baby-look-confeccionada-100-algodao-azul-royal-confeccionada.jpg"),
("p005", "Crocs", "55", "Calçados", "Feminino", "https://i5.walmartimages.com/asr/7f4aca8b-7066-4074-b2b8-d932178aab37_1.cdd5967b2e929096a36a9405243b139e.jpeg");

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES
("c001", 50, 0, "u003"),
("c002", 30, 0, "u003"),
("c003", 55, 0, "u004"),
("c004", 30, 0, "u005");

UPDATE purchases
SET created_at = datetime()
WHERE id = "c001";

UPDATE purchases
SET created_at = datetime()
WHERE id = "c002";

UPDATE purchases
SET created_at = datetime()
WHERE id = "c003";

UPDATE purchases
SET created_at = datetime()
WHERE id = "c004";

SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id
WHERE users.id = "u003";

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

INSERT INTO purchases_products
VALUES
("c001", "p003", 1),
("c002", "p004", 1),
("c003", "p005", 1),
("c004", "p004", 1);

-- SELECT 
-- purchases.id AS purchaseId,
-- purchases.total_price AS totalPrice,
-- purchases.paid,
-- purchases.delivered_at AS deliveredAt,
-- purchases.buyerd_id AS buyerdId,
-- products.id AS productId,
-- products.name AS productName,
-- products.price
-- FROM purchases
-- LEFT JOIN purchases_products
-- ON purchases_products.purchase_id = purchases.id
-- INNER JOIN products
-- on purchases_products.product_id = products.id;