Topicos - trabalho 1 

Rotas

* GET 127.0.0.1:3000/disciplinas

  Retorno: objetos das disciplinas

* POST 127.0.0.1:3000/disciplinas

  Parâmetros : 
            { "codigo": Number,
              "nome": String,
              "professor": String,
              "departamento": String,
              "qtdcreditos": Number }
            

  Retorno: Objeto da disciplina cadastrada
  
* PUT 127.0.0.1:3000/disciplinas/:codigo

  Parâmetros: 
            { "codigo": Number, 
              "nome": String, 
              "professor": String,
              "departamento": String,
              "qtdcreditos": Number
            }
             (Route Params):
             codigo

  Retorno: "A disciplina foi atualizada."
  
* DELETE 127.0.0.1:3000/disciplinas/:codigo

  Parâmetros: 
          (Route Params):
            codigo

  Retorno: "A disciplina foi removida."




