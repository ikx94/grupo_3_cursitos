const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/public/index.html"));
});

app.get("/detalleProducto.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/public/detalleProducto.html"));
});

app.get("/carrito.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/public/carrito.html"));
});

app.get("/login.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/public/login.html"));
});

app.get("/registro.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/src/public/registro.html"));
});
