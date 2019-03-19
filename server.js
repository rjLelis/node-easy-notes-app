const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() =>{
    console.log("Succesfully connected to the database");
}).catch((err) =>{
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
})

app.get("/", (req, res) =>{
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

require("./app/routes/notes.routes.js")(app);