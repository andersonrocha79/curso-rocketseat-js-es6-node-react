const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload') 
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();

// o muter permite que a aplicação consiga
// entender mensagens do tipo multipartform, e ler as imagens enviadas
const upload = new multer(uploadConfig);

// criação de rotas utilizadas na aplicação
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;