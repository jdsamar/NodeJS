const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

let users = [];


app.get("/", (req, res) => {
    res.render('mainpage.ejs', {data:users});
})

app.get('/form', (req, res) => {
    res.render('form.ejs');
})

app.post('/user/add', (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email
    }
    users.push(userData)
    res.render('mainpage.ejs', { data: users});
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000")
})