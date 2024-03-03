const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const userSchema = new Schema(
    {
        username:{type : "string",required : "true",min:4,unique : "true"},
        password:{type : "string"}
    }
);


const user = model("user",userSchema);

module.exports = user; 