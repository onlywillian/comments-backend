const db = require("../database/db");

const CommentSchema = new db.default.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const comment = new db.default.model("comment", CommentSchema);

export default comment;