const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "guidefinder_db"
});


app.get("/", function(req, res) {
    res.render('index', { icecreams })
});

app.get("/home", function(req, res) {
    res.render('home', { icecreams })
});

app.get("/profiles", (req, res) => {
   connection.query('SELECT * FROM guideinfo;', (err,data) => {
        console.log(data);
        res.render('profiles', {guideinfo: data});
    })
});

app.get("/profiles/:id", (req, res) => {
    const id = req.params.id
    console.log(id)
  connection.query('SELECT * FROM guideinfo WHERE guideID=?;', [id], (err,data) => {
      if (err) throw err
    console.log(data);   
    res.send(data[0]);
       
    })
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});