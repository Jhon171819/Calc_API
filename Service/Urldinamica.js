const express = require("express");
const urldinamica = express.Router();
const actUrl = "/Service";
urldinamica.use(express.static("https://calc-api.vercel.app/" + "Client"));

urldinamica.post(actUrl + '/adi', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 + valor2;
    res.json({ result });
});
urldinamica.post(actUrl + '/mult', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 * valor2;
    res.json({ result });
});
urldinamica.post(actUrl +'/sub', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 - valor2;
    res.json({ result });
});
urldinamica.post(actUrl +'/divs', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 / valor2;
    res.json({ result });
});

module.exports = urldinamica