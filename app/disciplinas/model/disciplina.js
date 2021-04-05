var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('disciplinas', 
    new Schema({
        codigo: Number,
        nome: String,
        professor: String,
        departamento: String,
        qtdcreditos: Number
    })
);

