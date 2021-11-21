const Comment = require('../../models/model');
const controller = require("../controllers/controller");

module.exports = app => {
    app.route("/api/v1/comments")
        .get(async (req, res) => {
            const data = await Comment.find();

            res.send({ data: data }).status(200);
        })
        .post((req, res) => {
            const comment = new Comment(req.body);
            comment.save(err => {
                if (err) return res.send({ error: "save error" })

                res.send({ success: comment }).status(200);
            })
        })
}