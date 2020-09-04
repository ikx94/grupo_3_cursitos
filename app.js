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
