const express = require("express")


const router = express.Router();;
const characters = require("../data/characters.js");
const commentsSrc = require("../data/comments.js");
const users = require("../data/users.js");




//middleware used to calc average rating when viewing character pages

router.use("/", (req, res, next) => {
    for (let i in characters) {
        characters[i].avgRate = calcRating(characters[i].ratings);
    }
    next();
})

//same middleware for /:name route
router.use("/:name", (req, res, next) => {
    const character = characters.find((c) => c.name == req.params["name"]);
    character.avgRate = calcRating(character.ratings);
    next();
})

//route that shows json of characters, query option available for sorting by rating
router.route('/')
    .get((req, res) => {
        if (req.query["rating"]) {
            const character = characters.filter((c) => c.avgRate > req.query.rating)
            if(character.length == 0){
            res.json(character);
            }else{
                res.send("No characters found")
            }
        } else {

            res.json(characters);
        }
    })


//route that shows specific character and renders templated view
//query for userId can be used to simulate different users posting comments
router.route("/:name")
    .get((req, res, next) => {
        const character = characters.find((c) => c.name === req.params["name"]);
        console.log("This is character", character.name);
        if (character) {
            const comments = commentsSrc.filter((c) => c.charId === character.id);

            res.render('../pages/characters.ejs', {
                name: character.name,
                description: character.description,
                comments: comments,
                img: character.img_src,
                users: users,
                rate: character.avgRate


            })
        } else {
            next();
        }
    }).post((req, res) => { //used to make comments on character page
        const character = characters.find((c) => c.name === req.params["name"]);
        const user = users.find((u) => u.id == req.query.userId)
        console.log(req.body.comment);
        if (req.body.comment[0] == "") {
            res.send("Request could not be made. No data provided.");
            next();
        }
        if (!user && req.query.userId) {
            res.send("UserID not found");
        }
        else if (!user) {
            console.log("user does not exist");
            userID = 9001;
            commentsSrc.push({
                id: commentsSrc[commentsSrc.length - 1].id + 1,
                charId: character.id,
                userId: userID,
                content: req.body.comment[0],
            })

        } else {
            userID = req.query.userId;
            commentsSrc.push({
                id: commentsSrc[commentsSrc.length - 1].id + 1,
                charId: character.id,
                userId: userID,
                content: req.body.comment[0],
            })
        }

        const comments = commentsSrc.filter((c) => c.charId === character.id);

        res.render('../pages/characters.ejs', {
            name: character.name,
            description: character.description,
            comments: comments,
            img: character.img_src,
            users: users,
            rate: character.avgRate
        });
    })


//function used in middle ware
function calcRating(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
}


module.exports = router;