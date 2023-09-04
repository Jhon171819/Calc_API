import app from '../app'
const express = require('express');
const urldinamica = express.Router();
urldinamica.use(express.json());
const actUrl = "/api";

urldinamica.use(express.static("https://calc-api.vercel.app/" + "Client"));

urldinamica.get('/api/Urldinamica', (req,res) => res.send("get funcionando"))
// exports.handler = async function (event) {
//     const eventBody = JSON.parse(event.body).operation;   
//     if (eventBody == "adi") {
//         console.log('entramos na SF')
//     try {
//         const { valor1, valor2 } = JSON.parse(event.body);
//         const result = valor1 + valor2;
        
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ result })
//     };
//     } catch (error) {
//         return {
//             statusCode: 400,
//             body: JSON.stringify({ error: 'Erro na requisição' })
//         };
//     } }
//     }
    
module.exports = (req, res) => {
    if (req.method === 'POST') {
      // Lógica de manipulação de solicitações POST aqui
      const requestBody = req.body;
      
      // Realize alguma operação com os dados do corpo da solicitação
      const resultado = requestBody.valor1 + requestBody.valor2;
  
      res.status(200).json({ resultado });
    } else {
      res.status(405).json({ error: 'Método não permitido' });
    }
  };


urldinamica.post(actUrl + '/adi', (req, res) => {
    const requestBody = req.body;
  
  // Realize alguma operação com os dados do corpo da solicitação
  const resultado = requestBody.valor1 + requestBody.valor2;

  res.status(200).json({ resultado });
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
export default app;
module.exports = urldinamica