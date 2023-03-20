const users = [
    "usuario 1", 
    "usuario 2 ", 
    "usuario 3"];

// CRUD
function createUser() {
    console.log("Usuário criado")
}

function updateUser() {
    console.log("Usuário Atualizado")
}

function listUser() {
    return "Lista de usuários";
}

function deleteUser() {
    console.log("Usuário deletado")
}
// Fim CRUD

module.exports = {
    users,
    createUser,
    updateUser,
    listUser,
    deleteUser
};