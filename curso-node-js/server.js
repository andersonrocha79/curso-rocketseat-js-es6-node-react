const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// habilita o envio de json para o servidor
app.use(express.json());
// habilita o acesso publico de 'todos' os domínios
app.use(cors())

// iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true } );

// após a conexão, faz referência aos models
//require('./src/models/Product');
requireDir('./src/models');

// redirecionamento para rotas
app.use("/api", require('./src/routes'));

app.listen(3001);