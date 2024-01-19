const express = require("express")


const router = express.Router();;
const characters = require("../data/characters.js");
const commentsSrc = require("../data/comments.js");

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));


//middleware used to cacl average rating when viewing character pages
router.use("/",(req,res,next) => {
    for(let i in characters){
        characters[i].avgRate = calcRating(characters[i].ratings);
    }
    next();
})

router.use("/:name",(req,res,next) => {
    const character = characters.find((c) => c.name == req.params["name"]);
    console.log("name is ", req.params["name"]);
    character.avgRate = calcRating(character.ratings);
    next();
})


router.route('/')
    .get((req, res) => {
        if (req.query["rating"]) {
            const character = characters.filter((c) => c.rating > req.query.rating)
            res.json(character);
        } else {

            res.json(characters);
        }
    })


router.route("/:name")
    .get((req, res,next) => {
        const character = characters.find((c) => c.name === req.params["name"]);
        //        console.log(comments);
        //        console.log(character);
        if (character) {
            const comments = commentsSrc.filter((c) => c.charId === character.id);

            res.render('../pages/characters.ejs', {
                name: character.name,
                description: character.description,
                comments: comments

            })
        }else{
            next();
        }
        //        res.json(character);
    }).post((req, res) => {
        const character = characters.find((c) => c.name === req.params["name"]);
        commentsSrc.push({
            id: commentsSrc[commentsSrc.length-1].id+1,
            charId: character.id,
            userId: 4,
            content: req.body.comment[0]
        })

        const comments = commentsSrc.filter((c) => c.charId === character.id);

        res.render('../pages/characters.ejs', {
            name: character.name,
            description: character.description,
            comments: comments

        });
    })




function calcRating(array){
    let sum = 0;
    for(let i = 0; i<array.length;i++){
        sum += array[i]
    }
    return sum/array.length;
}


module.exports = router;