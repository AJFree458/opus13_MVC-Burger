const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req,res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/burgers/:id", function(req,res) {

});

router.delete("/api/burgers/:id", function(req, res) {

});

module.exports = router;