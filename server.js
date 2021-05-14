const server = require("./app");

//requerimos nuestra base de datos
const conexion = require("./database");

//ocupamos nuestro set de port
server.listen(server.get("port"),()=>{
    console.log(server.get("port"));
})