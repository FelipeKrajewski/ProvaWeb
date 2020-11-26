const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes.js");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router);

const port = 1234;

app.listen(port , () =>{
    console.log(`Servidor rodando na porta ${port}`);
});