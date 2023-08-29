const express = require('express');
const app = express();
const cors = require("cors")
const port = 3000;
const whitelist = ['https://calc-api.vercel.app/', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]

app.use(cors({
    origin: ['https://calc-api.vercel.app', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
}))
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());

app.use(express.static('https://jhon171819.github.io/Calc_API/' + 'Client'));

app.post('https://calc-api.vercel.app/adi', (req, res) => {
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
