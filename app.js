// const express = require('express');
// const app = express();
// const cors = require("cors");
// const port = 3000;
// app.use(express.json());
// const whitelist = ['https://calc-api.vercel.app/', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"];
// const vrL = "https://calc-api.vercel.app/Client";
// app.use(cors({
//     origin: ['https://calc-api.vercel.app', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
// }));
// app.use(express.static('https://calc-api.vercel.app/' + 'Client'));

// app.use(cors({
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'];
// }));

// app.post('/adi', (req, res) => {
//     const { valor1, valor2 } = req.body;
//     const resultado = valor1 + valor2;
//     res.json({ resultado });
//   });
  
// app.post('/mult', (req, res) => {
//     const { valor1, valor2 } = req.body;
//     const resultado = valor1 * valor2;
//     res.json({ resultado });
// });

// app.post('/sub', (req, res) => {
//     const { valor1, valor2 } = req.body;
//     const resultado = valor1 - valor2;
//     res.json({ resultado });
// });

// app.post('/divs', (req, res) => {
//     const { valor1, valor2 } = req.body;
//     const resultado = valor1 / valor2;
//     res.json({ resultado });
// });


// app.listen(port, () => {
//     console.log(`App is running at the port ${port}`);
// });

const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000; // Use a variável de ambiente PORT para a porta

app.use(express.json());

// Configurar o CORS
const whitelist = ['https://calc-api.vercel.app', 'https://www.google.com', 'https://jhon171819.github.io'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido por CORS'));
    }
  }
};

app.use(cors(corsOptions));


app.post('/adi', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 + valor2;
    res.json({ resultado });
});

app.get('/adi', (req,res) => res.json({ resultado }));

app.post('/mult', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 * valor2;
    res.json({ resultado });
});

app.get('/mult', (req,res) => res.json({ resultado }));

app.post('/sub', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 - valor2;
    res.json({ resultado });
});
app.get('/sub', (req,res) => res.json({ resultado }));

app.post('/divs', (req, res) => {
    const { valor1, valor2 } = req.body;
    const resultado = valor1 / valor2;
    res.json({ resultado });
});
app.get('/divs', (req,res) => res.json({ resultado }));

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
