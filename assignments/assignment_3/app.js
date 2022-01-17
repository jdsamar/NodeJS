const express = require("express");
const bodyparser = require("body-parser");
const req = require("express/lib/request");
const app = express();

app.use(bodyparser());

var users = [
    {
        name: "xyz",
        email: "xyz@xyz.com"
    },
    {
        name: "admin",
        email: "admin@admin.com"
    },
    {
        name: "10x Academy",
        email: "10X@10xacademy.com"
    }
];


app.set('views', './views');
app.set('view engine', 'ejs');





app.get("/",(req, res) => {
    res.render("mainpage.ejs", {users});
});


app.get("/form",(req, res) => {
    res.render("form.ejs");
});


app.post("/add/user", (req, res) => {
    users.push({
        name: req.body.name,
        email: req.body.email,
    })
    res.redirect("/");
});




app.listen(3000, () => {
    console.log("Server is listening on Port 3000")
})