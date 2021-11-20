const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/", () => {
    console.log("Conectou!");
});

export default mongoose;