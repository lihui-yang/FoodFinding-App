var mongoose = require("mongoose");
var foodsSchema = new mongoose.Schema({
    name: String,
    image: String,
    restaurant: String,
    description: String,
    price:String,
    page: String,
    author:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username:String
    },
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Food",foodsSchema);
