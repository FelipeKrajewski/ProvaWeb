const mongoose =  require("mongoose");

const produto = new mongoose.Schema({
    nome : {
        type: String, 
        require: [true, "O campo nome é obrigatório"]
    }, 
    codigoBarras:{
        type: String, 
        unique: true,
        require: [true, "O campo código de Barras é obrigatório"]
    },
    preco:{
        type: Number, 
        require: [true, "O campo preço é obrigatório"]
    },
    CriadoEm: {type: Date, default:Date.now}
});

module.exports = mongoose.model("Produto", produto);