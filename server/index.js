const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("hello world")
});

app.post("/signup",(req,res)=>{
    const {username,password} = req.body;
    res.json({username,password});
});

app.listen(port,()=>{
    console.log("listening port",port);
});

