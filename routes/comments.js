const express = require("express");

const router = express.Router();

let comments = require("../data/comments.js");

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//route to show all comments
router.route('/')
    .get((req, res, next) => {
        if (comments.length > 0) {
            res.json(comments);
        } else {
            next()
        }
    }).post((req, res) => { //allows for post requests adding comments
        console.log(req.body);
        const newComment = req.body;
        console.log(comments.length);
        comments.push({
            id: comments[comments.length-1].id+ 1,
            charId: newComment.charId,
            userId: newComment.userId,
            content: newComment.content
        })
        res.send(comments).status(201);
    })

//obtain a specific comment id
router.route('/:id') // gets a comment with a specific id
    .get((req, res, next) => {
        const comment = comments.find((c) => c.id == req.params["id"]);
        if (comment) {
            res.json(comment);

        } else {
            next()
        }
    }).patch((req, res) => { //updates a comment with specific id
        const comment = comments.find((c) => c.id == req.params["id"]);
        const newComment = req.body;
        console.log(newComment);
        comment.content = newComment.content;

        res.json(comment);
    }).delete((req, res) => { // deletes a comment wiht  a specific id
        let comment = comments.find((c) => c.id == req.params["id"]);
        if (comment) {
            comments = comments.toSpliced(comments.indexOf(comment),1);
            res.json(comments);
        } else {
            res.send("Cannot find comment").status(404);
        }
    })



module.exports = router;