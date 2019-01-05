var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);

        var friendSurveys = req.body;
        const totalDifference = 0;

        for (var i = 0; i < friendSurveys.length; i++) {
            for (var j = 0; i < friends.length; j++) {
                totalDifference = Math.abs(friendSurveys.length - friends.length)
            }
            console.log(totalDifference);

            friends.push(friendSurveys);
        }
    });

    app.post("/api/clear", function (req, res) {
        friends.length = [];
        res.json({
            ok: true
        });
    });

}