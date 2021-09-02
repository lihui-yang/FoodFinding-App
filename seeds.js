var mongoose = require("mongoose");
var Food = require("./models/food");
var Comment   = require("./models/comment");
 
var data = [
    {
        name:"JAPA Roll",
        image:"https://images.squarespace-cdn.com/content/v1/5710267fc2ea5128296569f5/1597894808906-QF9D0JVERFUNP6Q6AZYF/ke17ZwdGBToddI8pDm48kNDfRgEO5THg9iOdoMxN_7F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZkUEmK-fEb5aE91c0w5JTBufvsjC7mLkSmHBAp-u7mn4Q/edit.IMG_0128.jpg?format=2500w",
        restaurant:"NUbo Japanese Tapas",
        description:"spicy tuna, avocado, prawn tempura, pickled jalapeno, fish egg, fresh jalapeno"
    },
    {
        name:"JAPA Roll",
        image:"https://images.squarespace-cdn.com/content/v1/5710267fc2ea5128296569f5/1597894808906-QF9D0JVERFUNP6Q6AZYF/ke17ZwdGBToddI8pDm48kNDfRgEO5THg9iOdoMxN_7F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZkUEmK-fEb5aE91c0w5JTBufvsjC7mLkSmHBAp-u7mn4Q/edit.IMG_0128.jpg?format=2500w",
        restaurant:"NUbo Japanese Tapas",
        description:"spicy tuna, avocado, prawn tempura, pickled jalapeno, fish egg, fresh jalapeno"
    },
    {
        name:"JAPA Roll",
        image:"https://images.squarespace-cdn.com/content/v1/5710267fc2ea5128296569f5/1597894808906-QF9D0JVERFUNP6Q6AZYF/ke17ZwdGBToddI8pDm48kNDfRgEO5THg9iOdoMxN_7F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZkUEmK-fEb5aE91c0w5JTBufvsjC7mLkSmHBAp-u7mn4Q/edit.IMG_0128.jpg?format=2500w",
        restaurant:"NUbo Japanese Tapas",
        description:"spicy tuna, avocado, prawn tempura, pickled jalapeno, fish egg, fresh jalapeno"
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Food.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("removed foods!");
    //     Comment.remove({}, function(err) {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log("removed comments!");
    //          //add a few campgrounds
    //         data.forEach(function(seed){
    //             Food.create(seed, function(err, food){
    //                 if(err){
    //                     console.log(err)
    //                 } else {
    //                     console.log("added a food");
    //                     //create a comment
    //                     Comment.create(
    //                         {
    //                             text: "This place is great, foods are delicious.",
    //                             author: "Emma"
    //                         }, function(err, comment){
    //                             if(err){
    //                                 console.log(err);
    //                             } else {
    //                                 food.comments.push(comment);
    //                                 food.save();
    //                                 console.log("Created new comment");
    //                             }
    //                         });
    //                 }
    //             });
    //         });
    //     });
     }); 
    //add a few comments
}
 
module.exports = seedDB;

