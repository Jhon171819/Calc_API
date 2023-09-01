const express = require("express");
const urldinamica = express.Router();
const actUrl = "/api";
urldinamica.use(express.static("https://calc-api.vercel.app/" + "Client"));

urldinamica.get('/api', (req,res) => res.send("get funcionando"))

exports.handler = async function (event) {
    const eventBody = JSON.parse(event.body;)

    if (eventBody.operation == 'adi') {
       try {
        const { valor1, valor2 } = JSON.parse(event.body);
        const result = valor1 + valor2;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ result })
        };
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Erro na requisição' })
        };
    } 
    }
    
}


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