const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/comments", () => {
    console.log("Conectou!");
});

module.exports = mongoose;