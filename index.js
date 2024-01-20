express = require("express");
app = express();


ejs = require("ejs");
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");


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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static("./styles"))




app.get("/", (req,res) => {
    res.send("This is the home page");
})

app.use("/",(req,res) => {
    res.send("Info Not Found").status(404)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(PORT, ()=> {
    console.log("The Server has challenged you to a match!")
})
