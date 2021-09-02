var express = require("express");
var router = express.Router({mergeParams:true});
var Food = require ("../models/food");
var Comment = require ("../models/comment");

router.get("/new",isLoggedIn,function(req,res){
    Food.findById(req.params.id, function(err,food){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new", {food:food});
        }
    })
});


router.post("/",isLoggedIn,function(req,res){
    Food.findById(req.params.id, function(err,food){
        if(err){
            console.log(err);
            res.redirect(":/foods")
        }else{
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err);
                }else{
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    
                    comment.save();
                    food.comments.push(comment);
                    food.save();
                    res.redirect('/foods/'+ food._id);
                }
            });
        }
    });
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;