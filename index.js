express = require("express");
app = express();

const PORT = 3000;

const characters = require("./data/characters");
const users = require("./data/users");
const comments = require("./data/comments");




app.get("/", (req,res) => {
    res.send("This is the home page");
})


app.get("/characters",(req,res) => {
    res.json(characters);
})

app.get("/characters/:name",(req,res)=> {
    const character = characters.find((c) => c.name === req.params["name"])
    console.log(character);
    console.log(req.params["name"])
    console.log(character);
    res.json(character);
})


app.get("/users",(res,req) => {
    res.json(users);
})


app.get("/comments",(res,req)=>{
    res.json(comments);
})



app.listen(PORT, ()=> {
    console.log("The Server has challenged you to a match!")
})