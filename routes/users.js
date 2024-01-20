const express = require("express");

const router = express.Router();

let users = require("../data/users.js");

router.route('/') // base page for receiving users
    .get((req, res) => {
        res.json(users);
    }).post((req, res) => {
        if (req.body.name && req.body.id) {
            users.push({
                id: req.body.id,
                name: req.body.name
            })
        }else{
            next();
        }
    })

    //finds user with unique id
router.route('/:id')
.get((req, res, next) => {
    const user = users.find((u) => u.id == req.params.id);
    console.log(users);
    if (user) {
        res.json(user);
    } else {
        next();
    }
}).patch((req,res,next) =>{ //patch that allows user to update username. id shouldnot be changed
    const user = users.find((u) => u.id == req.params.id);
    if(req.body.name){
        user.name = req.body.name;
        users[users.findIndex((u) => u == user)] = user;
    }
    res.json(user);
}).delete((req,res,next) => {//deletes user at this id
    let user = users.find((u) => u.id == req.params.id);
    if(user){
    users = users.toSpliced(users.indexOf(user),1);
    res.json(user);
    }else{
        next();
    }

})


module.exports = router;