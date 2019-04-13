const db = require("../models");

const Prop = {
    findAll: function (req, res) {
        const query = req.body;
        console.log(query);
        db.Prop
          .find(query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}

module.exports = Prop;
