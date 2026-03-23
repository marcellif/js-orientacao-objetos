function User (nome, email){
    this.nome = nome;
    this.email = email;

    this.exibrInfos = function () {
        return `${this.nome}, ${this.email}`
    } 
}


const novoUser = new User('Jordana', 'jo.dana@email.com')


console.log (novoUser.exibrInfos())
