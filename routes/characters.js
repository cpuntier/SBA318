const express = require("express")


const router = express.Router();;
const characters = require("../data/characters.js");
const calcAverage = require("../data/characters.js");


router.route('/')
    .get((req, res) => {
        if(req.query["rating"]){
            const character = characters.filter((c) => c.rating > req.query.rating)
            res.json(character);
        }else{

        res.json(characters);
        }
    })





router.route("/:name")
    .get((req, res) => {
        const character = characters.find((c) => c.name === req.params["name"])
        console.log(character);
        res.json(character);
    }).post((req, res) => {
        const character = characters.find((c) => c.name === req.params["name"]);
        console.log(character);
        comments.push({
            id: comments.length,
            charId: character.id,
            userId: userId,
            content: req.body.content
        })
    })







module.exports = router;