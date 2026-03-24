import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criaCurso(curso){
        return `O curso ${curso} foi criado!`
    }

    excluirCurso(curso){
         return `O curso ${curso} foi excluido!`
    }

    desativarPerfil(user){
    return `O perfil de ${user} foi desativado!`
    }
}


const novoAdmin =  new Admin("Helio", "helinho@gmail.com", "10/02/2005");


console.log(novoAdmin);


console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.excluirCurso('inglês'));
console.log(novoAdmin.desativarPerfil('Andrea'));