const db = require("../models");

const Ticket = {
    create: function(req, res) {
        db.Ticket
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}

module.exports = Ticket;