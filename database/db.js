const mongoose = require("mongoose");
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("Conectou!");
});

module.exports = mongoose;