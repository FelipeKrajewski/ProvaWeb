const mongoose = require("mongoose");

const db  = mongoose.connect("mongodb+srv://devwebII:devwebII@produto.4natj.gcp.mongodb.net/Produto?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true});

//Monitorando o banco ...se ele estiver conectado ira exibir uma mensagem de conexão estabelecida:
mongoose.connection.on("connected", () =>{console.log("conexão estabelecida com o banco de dados")});
//Monitorando o banco ... Se estiver dado erro , então exibira uma mensagem de erro:
mongoose.connection.on("error" ,(error) =>{console.log( ` Erro no banco de dados: ${error} `)});
//Monitorando o banco ... Se estiver desconectado , então exibira uma mensagem :
mongoose.connection.on("disconnected" ,() =>{console.log('Banco de dados desconectado ')});


module.exports = db;