DELETE FROM shelfie
WHERE id = $1;

SELECT * FROM shelfie
ORDER BY id DESC;