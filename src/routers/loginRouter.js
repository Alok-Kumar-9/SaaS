const express = require('express');
const loginRouter = new express.Router();
const User = require('../models/users');

loginRouter.post('/userlogin' , async (req, res) => {
    try{
        let usrn = req.body.username;
        let pass = req.body.password;

        let results = await User.find({username: usrn});
        if(results.length == 0) {
            res.render('errpage');
        }else{
            if(pass === results[0].password){
                res.render('profile', {
                    buy: results[0].buy,
                    help: results[0].help,
                    chat: results[0].chat,
                    user: results[0].username,
                });
            }else{
                res.render('errpage');
            }
        }
    } catch(err){
        res.render("errpage");
    }
});

module.exports = loginRouter;