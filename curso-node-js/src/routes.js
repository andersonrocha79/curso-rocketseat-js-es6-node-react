const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// products > index
// http://localhost:3001/api/products
routes.get('/products' , ProductController.index);
routes.post('/products', ProductController.store);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// exporta deste arquivo o objeto routs
module.exports = routes;