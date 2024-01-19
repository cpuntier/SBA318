express = require("express");
app = express();

const PORT = 3000;

const characters = require("./data/characters");
const users = require("./data/users");
const comments = require("./data/comments");

const charRouter = require("./routes/characters.js");
const userRouter = require("./routes/users.js");
const commentsRouter = require("./routes/comments.js");

app.use("/characters",charRouter);
app.use("/users",userRouter);
app.use("/comments",commentsRouter);



app.get("/", (req,res) => {
    res.send("This is the home page");
})


app.listen(PORT, ()=> {
    console.log("The Server has challenged you to a match!")
})