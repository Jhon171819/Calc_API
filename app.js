const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(__dirname + '/Client'));

app.post('/add', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 + valor2;
    res.json({ result });
});
app.post('/mult', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 * valor2;
    res.json({ result });
});
app.post('/sub', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 - valor2;
    res.json({ result });
});
app.post('/divs', (req, res) => {
    const { valor1, valor2 } = req.body;
    const result = valor1 / valor2;
    res.json({ result });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});