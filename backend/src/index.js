
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

// suporte ao padrão http
const server = require('http').Server(app);

// suporte ao padrão websockets (permite notificação para todos os usuários da aplicação)
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://anderson-rocha:philipe2207@cluster0-km3on.mongodb.net/test?retryWrites=true&w=majority',
                 {useNewUrlParser: true});      
                 
// faz com que o objeto io seja embutido e possa ser recuperado em todas as requisiçoes ao servidor
app.use((req, res, next) =>
{
    req.io = io;
    next(); // garante que as rotas abaixo sejam executadas
});

// informa que todas as urls de diferentes ips e servidores podem acessar a aplicação
app.use(cors());

// rota para acessar a pasta de imagens da aplicação
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// arquivo de rotas da aplicação
app.use(require('./routes'));                 

server.listen(3333);

