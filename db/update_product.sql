UPDATE shelfie
SET (name, price, url) = ($2, $3, $4)
WHERE id = $1;

-- PUT sql on Ben's