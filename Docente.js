import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovarOuReprovarEstudante(nome, aprovado){
        if (aprovado === true){
            return `o aluno ${nome} foi aprovado`
        }else{
             return `o aluno ${nome} foi reprovado`
        }
    }
}


// const novoDocente =  new Docente("Mirna", "Mirna@gmail.com", "10/02/1988");

// console.log (novoDocente.aprovarOuReprovarEstudante('Luan', true))
// console.log (novoDocente.aprovarOuReprovarEstudante('Reinaldo', false))