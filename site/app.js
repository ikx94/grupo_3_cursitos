const express = require("express");
const path = require("path");
const browserSync = require("browser-sync");

const app = express();
const port = 2999;

app.listen(port, () => {
    console.log("Escuchando en el puerto 3000");
    browserSync({
        files: ["src/**/*.{html,js,css}"],
        online: false,
        open: false,
        port: port + 1,
        proxy: "localhost:" + port,
        ui: false,
    });
});

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/detalleProducto", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/detalleProducto.html"));
});

app.get("/carrito", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/carrito.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/login.html"));
});

app.get("/registro", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/registro.html"));
});
