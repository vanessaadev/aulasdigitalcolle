const http = require("http"); //vamos estar utilizando requisições http ,get post delete
const host = "localhost"; //vamos utilizar o localhost
const port = "8000"; //na porta 8000

const userController = require("./users"); //estou chamando o arquivo users.js

const server = http.createServer((req, res) => {
    res.end("Hello world") //resposta final
});

server.listen(port, host, () => { //listen == ouvindo, ele está aguardando requisições
    // if(req.){

    // }
    console.log(`Servidor de pé no link: http://${host}:${port}`)
})

console.log(userController.createUser()); //mostrar no console log o createUser que está no arquivo user.js