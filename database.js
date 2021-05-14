const mongoose = require("mongoose");

//download mongodb server, this proyect dont work with mongodb cloud
const conecction = mongoose.connect('mongodb://localhost:27017/test', {//test is a database, if the database doesnt exist it creates it
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("database is conected"))
    .catch((e)=>console.log("error de conexion a database"));

module.exports = conecction;

//mongodb create default id,