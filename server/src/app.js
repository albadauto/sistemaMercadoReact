const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT_SERVER || 8080
const indexRouter = require('./routes/index');
const cors = require('cors');
const mainRouter = require('./routes/main.route');
//Config
app.use(express.json());
app.use(cors());


//Routes
app.use('/', indexRouter )
app.use('/main', mainRouter )


//Banco de dados
mongoose.connect('mongodb://localhost/sistemamercado', () => console.log("MongoDB rodando"))
//Server
app.listen(port, () => console.log(`${port} Rodando nessa porta ai`));