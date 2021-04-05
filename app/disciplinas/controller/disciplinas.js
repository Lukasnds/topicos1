import Disciplina from '../model/disciplina';

exports.get = async function(req, res) {
    var resultados = await Disciplina.find();
    return res.send(resultados);
};

exports.post = async function(req, res) {

    const { codigo, nome, professor, departamento, qtdCreditos } = req.body;

    var data = {
        codigo: codigo,
        nome: nome,
        professor: professor,
        departamento: departamento,
        qtdCreditos: qtdCreditos
    };

    var jacadastrada = await Disciplina.findOne({"codigo": codigo});

    if(!jacadastrada) {
        var resultado = new Disciplina(data);
        resultado.save();
        return res.send(resultado);
    }
    else return res.send("Disciplina já cadastrada!");
    
};

exports.put = async function(req, res) {

    if(req.params.codigo) {
        var cadastrada = await Disciplina.findOne({"codigo": req.params.codigo});

        if(cadastrada) {
            Disciplina.findOneAndUpdate({"codigo": req.params.codigo}, { $set: req.body }, {upsert: false, useFindAndModify: false}, function(err, doc) {
                if (err) return res.send(500, {error: err});
                else return res.send("A disciplina foi atualizada.");
            });
        }
        else return res.send("Disciplina não encontrada.");
    }
    else return res.send("Informe o código da disciplina.");
};

exports.delete = async function(req, res) { 
    if(req.params.codigo) {
        var cadastrada = await Disciplina.findOne({"codigo": req.params.codigo});

        if(cadastrada) {
           var resultado = await Disciplina.deleteOne({"codigo": req.params.codigo})
           if(resultado.deletedCount == 1) return res.send("A disciplina foi removida.");
           else return res.send("Erro. Não foi possível remover a disciplina.");
        }
        else return res.send("A disciplina não foi encontrada.");
    } 
    else return res.send("Informe o código da disciplina.");
};
