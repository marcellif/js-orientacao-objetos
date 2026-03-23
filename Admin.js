import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
}


const novoAdmin =  new Admin("Helio", "helinho@gmail.com", "10/02/2005");


console.log(novoAdmin);

console.log(novoAdmin.exibirInfos());