const db = require("../models");

const Property = {
    create: function(req, res) {
        db.Property
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}

module.exports = Property;