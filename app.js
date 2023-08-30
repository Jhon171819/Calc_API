const express = require('express');
const app = express();
const cors = require("cors");
const urldinamica = require('./Service/Urldinamica');
const port = 3000;
const whitelist = ['https://calc-api.vercel.app/', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
const vrL = "https://calc-api.vercel.app/Client"
app.use(cors({
    origin: ['https://calc-api.vercel.app', 'https://www.google.com/', "https://jhon171819.github.io/Calc_API/"]
}))
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());

app.use(express.static('https://jhon171819.github.io/Calc_API/' + 'Client'));
app.use(urldinamica)

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
