const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgerControllers.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function() {
    console.log("App now listening on: http://localhost:" + PORT);
});