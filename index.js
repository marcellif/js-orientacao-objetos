import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User ("Eduarda", "aduda@email.com", "19/03/1978")

console.log(novoUser.exibirInfos("basic"))