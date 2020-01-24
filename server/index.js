require('dotenv').config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./ctrl");


app.use(express.json());
app.use(cors());

// ENDPOINTS HERE
// app.get("/api/products/:id", ctrl.getProduct);
// app.get("/api/products", ctrl.getAllProducts);
// app.post("/api/products", ctrl.addProduct);
// app.put("/api/products/:id", ctrl.udpateProduct);
// app.delete("/api/products/:id", ctrl.deleteProduct);



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
    app.listen(SERVER_PORT, () => 
        console.log(`Server running on ${SERVER_PORT}`));
})