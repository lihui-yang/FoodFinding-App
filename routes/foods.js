var express = require("express");
var router = express.Router();
var Food = require("../models/food");

router.get("/",function(req,res){
    Food.find({},function(err,allFoods){
        if (err){
            console.log(err);
        }else{
            res.render("foods/index",{foods:allFoods,currentUser:req.user});
        }
    });
});
// create

router.post("/",isLoggedIn,function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var restaurant = req.body.restaurant;
    var description = req.body.description;
    var price = req.body.price;
    var page = req.body.page;
    var author = {
        id:req.user._id,
        username: req.user.username
    }
    var newFood = {name:name,image:image,restaurant:restaurant,description:description,author:author,price:price,page:page}
    
    Food.create(newFood,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/foods");
        }
    });
    
});

// show new camp
router.get("/new",isLoggedIn,function(req,res){
    
    res.render("foods/new");
});

router.get("/:id",function(req,res){
    Food.findById(req.params.id).populate("comments").exec(function(err,foundFood){
        if(err){
            console.log(err);
        }else{
            console.log(foundFood);
            res.render("foods/show",{food:foundFood});
        }
    });
   
});

router.get("/:id/edit",checkFoodOwnership,function(req,res){
    Food.findById(req.params.id,function(err,foundFood){
        res.render("foods/edit",{food:foundFood});
        });
});

router.put("/:id",function(req,res){
    
    Food.findByIdAndUpdate(req.params.id,req.body.food,function(err,updatedFood){
        if(err){
            res.redirect("/foods")
        }else{
             res.redirect("/foods/"+req.params.id);
        }
    });
})

router.delete("/:id",checkFoodOwnership,function(req,res){
    Food.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/foods");
        }else{
            res.redirect("/foods");
        }
    });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

function checkFoodOwnership(req,res,next){
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

module.exports = router;