require('dotenv').config();
const express = require('express');
const massive = require("massive");
const cors = require("cors");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./ctrl");

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
}).catch(err => console.log(err))

// --> ENDPOINTS HERE 
app.get("/api/product/:id", ctrl.getProduct)
app.get("/api/inventory", ctrl.getProducts)
app.post("/api/product", ctrl.addProduct)
app.put("/api/product/:id", ctrl.updateProduct)
app.delete("/api/product/:id", ctrl.deleteProduct)