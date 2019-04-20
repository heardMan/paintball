const db = require("../models");

const Announcement = {
    create: function(req, res) {
        db.Announcement
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}

module.exports = Announcement;