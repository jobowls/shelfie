CREATE TABLE products  (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(50),
product_price INT, 
url VARCHAR(3000)
);

SELECT *
FROM products;

-- INSERT INTO products (name, price, url) VALUES ('Shoes', 99, 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/zxtlbrkhwlczlfudrswz/flex-control-3-mens-training-shoe-1lFKLq.jpg')