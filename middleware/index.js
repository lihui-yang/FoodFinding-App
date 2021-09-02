var Food = require("../models/food");
// var Comment = require("../models/comment")
var middlewareObj = {};

middlewareObj.checkFoodOwnership = function(req,res,next){
        if(req.isAuthenticated()){
    
            Food.findById(req.params.id,function(err,foundFood){
                if(err){
                    res.redirect("back")
                }else{
                    if(foundFood.author.id.equals(req.user._id)){
                        next();
                    }
                    else{
                        res.redirect("back");
                    }
                }
            });
        }else{
            res.redirect("back");
        }
}

// middlewareObj.checkComment = function(req,res,next){
//         if(req.isAuthenticated()){
//             Comment.findById(req.params.comment_id,function(err,foundComment){
//                 if(err){
//                     res.redirect("back");
//                 }
//                 else{
//                     if(foundComment.author.id.equals(req.user._id)){
//                         next();
//                     }else{
//                         res.redirect("back");
//                     }
//                 }
//             });
//         }else{
//             res.redirect("back");
//         }
// }

middlewareObj.isLoggedin = function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login")
}

module.exports = middlewareObj