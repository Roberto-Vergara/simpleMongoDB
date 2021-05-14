const express = require("express");
const User = require("./models/user");
const app = express();

app.set("port",process.env.PORT || 3000);

//USE MONGODB SERVER AND POSTMAN OR IMSOMNIA

//you must use this method to receive json from client or postman
app.use(express.json());

//get data
app.get("/",async (req,res)=>{
    const data =await User.find();//you can search for specific records with Model.findById()
    res.json(data);
})

//post
app.post("/insert",async (req,res)=>{

    const name = req.body.name;
    const email = req.body.email;

    //you can use destructuring
    // const {name, email} = req.body;
    const insertUser = await User.create({
        name:name,
        email
    });

    if(insertUser){
        res.json("register created");
    }
    else{
        res.json("some error");
    }
})

//put or update
app.put("/:id",async (req,res)=>{// you must search in postman http://localhost:3000/1sdkasdjkak(example id), the id must be one of our created users
    //get id from url.  u can see the id in mongo.exe
    const id = req.params.id;

    const {name,email} = req.body;
    //1st parameter is id, 2nd must be the data to update
    const updateUser = await User.findByIdAndUpdate(id,{"$set":{name:name,email}},{useFindAndModify:false});
    // (id {newName,newEmail}) borra todos los registros y pone esos nuevo, si pones el $set solo ocupara los valores estimados y no borrara ningun registro extra;
    if(updateUser){
        res.json("register updated")
    }
    else{
        res.status(404).json("not found");
    }
})

//delete
app.use("/:id",async (req,res)=>{
    const id = req.params.id;

    //u can use then and catch
    await User.findByIdAndDelete(id)
    .then(()=>res.json("register deleted"))
    .catch(()=>res.json("error"));
})


module.exports = app;