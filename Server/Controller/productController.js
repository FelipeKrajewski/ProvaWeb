const produto = require('../model/product.js');

class productController{
    async cadastrar(req,res){
        var result = await produto.create(req.body,(err) =>{
            if(err){
                res.status(400).json({err , error : 'esse codigo de barras já existe'});
            }else{
                res.status(201).json(result);
            }
        });
    }
    
    async get(req, res){
        res.status(200).json(  await  produto.find({}));
    }
    async getByCodigoBarras(req, res){
        var result = await produto.findOne({codigoBarras : req.params.codigoBarras});
        res.status(200).json(result);
    }
    async deleteProduct(req, res){
        var result = await produto.remove({codigoBarras: req.params.codigoBarrasDelete});
        res.status(200).json(result);
    }

    async updateProduct(req, res){
        var result = await produto.update({codigoBarras:req.params.productIdUp},req.body);
        res.status(200).json(result);
    }
}

module.exports = new productController();