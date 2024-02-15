const express = require("express");
const {connection}=require('./utils/db');
const cors=require('cors');
const app=express();
app.use(express.json());
const {FavModel}=require('./models/favorite.model');

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("API Here");
})

app.listen(8081,async ()=>{
    try{
        await connection;
        console.log("Database Connected");
    }
    catch(err){
        console.log(err);
    }
    console.log("App is running on port 8081");
})