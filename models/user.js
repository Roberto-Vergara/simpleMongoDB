const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaUser = new schema({
    name: String,
    email: String
}); //the schema is how you want it to contain the data

//Idk why but in the first parameter I put the same name as the constant, it work
const User = mongoose.model("User",schemaUser);

module.exports = User;

// mongoose requires a model to interact with records, it creates a collection by default with a name in prural