
const express = require('express');
const urldinamica = express.Router();
urldinamica.use(express.json());
const actUrl = "/api";

urldinamica.use(express.static("https://calc-api.vercel.app/" + "Client"));


urldinamica.post('https://calc-api.vercel.app/'+ 'adi', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 + valor2;
    res.status(200).json({ resultado });
  });
  
  urldinamica.post(actUrl + '/mult', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 * valor2;
    res.status(200).json({ resultado });
  });
  
  urldinamica.post(actUrl + '/sub', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 - valor2;
    res.status(200).json({ resultado });
  });
  
  urldinamica.post(actUrl + '/divs', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 / valor2;
    res.status(200).json({ resultado });
  });
  
module.exports = urldinamica