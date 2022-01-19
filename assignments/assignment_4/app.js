const express = require("express");
const app = express();
const faker = require('faker');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));



app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
app.use(express.static("public"));
const Schema = mongoose.Schema;
const user = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    isPromoted:{
        type:Boolean,
        default:null
    }
  });
const assignment_4 = mongoose.model("assignment_4", user);
mongoose.connect('mongodb://localhost/assignment_4');


app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', async(req, res)=>{
    console.log(users);
    var users = await assignment_4.find();
    res.render('index',{users})
});
app.get('/form', (req, res)=>{
    res.render('form')
});
app.post("/user/add",async (req, res)=>{
    console.log(req.body);
    await assignment_4.create({
        name:req.body.name,
        email:req.body.email,
        isPromoted:null
    });
    res.redirect('/');
})


app.put("/users/:id/promote", async (req, res) =>{
    await assignment_4.updateOne({_id: req.params.id}, {isPromoted: true})
    res.redirect("/");
})
app.put("/users/:id/demote", async (req, res) =>{
    await assignment_4.updateOne({_id: req.params.id}, {isPromoted: false})
    res.redirect("/");
})


app.delete("/users/:id/delete", async (req, res) =>{
    await assignment_4.deleteOne({_id: req.params.id})
    res.redirect("/");
})


app.listen(3000,()=>{
    console.log('listening on 3000');
});