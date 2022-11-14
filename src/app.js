require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser");

const app = express();
const homeRoutes = require('../src/routes/home'); 
const carritoRoutes = require('../src/routes/product'); 
const DetalleProductoRoutes = require('../src/routes/detail'); 
const loginRoutes = require('../src/routes/login'); 
const RegistrameRoutes = require('../src/routes/register'); 
const cartRoutes = require('../src/routes/cart');

app.get('/',function (req, res) {
    res.sed ('cart')
})
app.get('/',function (req, res) {
    res.sed ('Registrame')
})
app.get('/',function (req, res) {
    res.sed ('Carrito')
})
app.get('/',function (req, res) {
    res.sed ('DetalleProducto')
})
app.get('/',function (req, res) {
    res.sed ('home')
})

app.listen(
    process.env.PORT, () => {
        console.log("server listening on port:", process.env.PORT);   
    });
