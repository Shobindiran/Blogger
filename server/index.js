const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./modals/User");
const bcrypt = require("bcrypt");

const port = 8000;
const salt = bcrypt.genSaltSync(10);

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://shobindiran:Bzi9TfavCNDEPrDi@blogger.cjnixmb.mongodb.net/?retryWrites=true&w=majority&appName=Blogger")
.then(
    console.log("db connected")
);

// app.get("/",(req,res)=>{
//     res.json("hello world")
// });
// mongodb+srv://shobindiran:Bzi9TfavCNDEPrDi@blogger.cjnixmb.mongodb.net/?retryWrites=true&w=majority&appName=Blogger

app.post("/signup",async (req,res)=>{
    const {username,password} = req.body;

    try{
        const userDoc = await User.create({
            username,
            password : bcrypt.hashSync(password,salt)
        })

        res.json(userDoc);
    }
    catch(e){
        if (e.code === 11000) {
            res.status(400).json({ error: "Username already exists" });
        } else {
            res.status(400).json(e);
        }
    }
});


app.post("/login",async (req,res)=>{
    const {username,password} = req.body;

    try{
        const userDoc = await User.findOne({username});
        let grantAccess = false;
        if(userDoc){
            const passwordMatches = bcrypt.compareSync(password,userDoc.password);
            if(passwordMatches){
                grantAccess = true
                res.json({grantAccess});
            }
            else{
                res.json({error:"Password didn't match"});
            }
        }
        else{
            res.json({error:"Username not found"});
        }

    }
    catch(e){
            res.status(400).json(e);
    }
});

app.listen(port,()=>{
    console.log("listening port",port);
});

