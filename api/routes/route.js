const Comment = require('../../models/model');
const controller = require("../controllers/controller")

module.exports = app => {
    app.route("/api/v1/comments")
        .get(controller)
        .post((req, res) => {
            const comment = new Comment(req.body);

            res.send({ success: comment }).status(200);
        })
}