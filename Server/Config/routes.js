const express = require('express');
const produto = require('../model/product.js');
const router = express.Router();
const  productController = require('../Controller/productController');
const product = require('../model/product.js');

router.get('/produto/listar',productController.get);
router.get('/produto/buscar/:codigoBarras', productController.getByCodigoBarras)
router.delete('/produto/remover/:codigoBarrasDelete', productController.deleteProduct)
router.put('/produto/alterar/:productIdUp', productController.updateProduct)
 router.post("/produto/cadastrar", productController.cadastrar);

module.exports = router;