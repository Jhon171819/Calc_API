const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const whitelist = ['https://calc-api.vercel.app/', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
const vrL = "https://calc-api.vercel.app/Client"
app.use(cors({
    origin: ['https://calc-api.vercel.app', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
}))
app.use(express.static('https://calc-api.vercel.app/' + 'Client'));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());
app.post('/adi', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 + valor2;
    res.status(200).json({ resultado });
  });
  
app.post('/mult', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 * valor2;
    res.status(200).json({ resultado });
});

app.post('/sub', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 - valor2;
    res.status(200).json({ resultado });
});

app.post('/divs', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 / valor2;
    res.status(200).json({ resultado });
});


app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
