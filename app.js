var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose"),
    passport     = require("passport"),
    LocalStrategy= require ("passport-local"),
    Food         = require("./models/food"),
    Comment      = require("./models/comment"),
    User         = require("./models/user"),
    seedDB       = require("./seeds"),
    methodOverride = require("method-override")


var commentRoutes = require("./routes/comments"),
    foodRoutes    = require("./routes/foods"),
    indexRoutes   = require("./routes/index")


mongoose.connect("mongodb+srv://emma:623587915@cluster0.mxrxd.mongodb.net/food_recommend?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true 

}).then(() => {
    console.log("connect to DB");
}).catch(err => {
    console.log("error",err.message);
});
//mongoose.connect("mongodb://localhost/food_recommend");
// Food.create(
//     {
//         name:"JAPA Roll",
//         image:"https://images.squarespace-cdn.com/content/v1/5710267fc2ea5128296569f5/1597894808906-QF9D0JVERFUNP6Q6AZYF/ke17ZwdGBToddI8pDm48kNDfRgEO5THg9iOdoMxN_7F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0prfa1Z6IeUrCPboCAmmHZkUEmK-fEb5aE91c0w5JTBufvsjC7mLkSmHBAp-u7mn4Q/edit.IMG_0128.jpg?format=2500w",
//         restaurant:"NUbo Japanese Tapas",
//         description:"spicy tuna, avocado, prawn tempura, pickled jalapeno, fish egg, fresh jalapeno"
//     }, function(err,food){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("newly created");
//             console.log(food);
//         }
// });

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"))

// app.use(flash());

// seedDB();

app.use(require("express-session")({
    secret:"Once",
    resave:false,
    saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});


app.use("/",indexRoutes);
app.use("/foods/:id/comments",commentRoutes);
app.use("/foods/",foodRoutes);



app.listen(process.env.PORT || 3000,() =>{
    console.log("FoodFinding Serve has started.")
});