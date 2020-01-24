UPDATE products
SET price = $2, 
    url = $3
WHERE id = $1;
