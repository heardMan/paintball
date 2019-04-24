const db = require("../models");

const User = {
    findAll: function (req, res) {
        const query = req.body;
        console.log(query);
        db.User
          .find(query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      
    findByEmail: function(req, res) {
        const query = req.body;
        db.User
        .find(query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findManagers: function (req, res) {
        const query = {roles: "manager"};
        db.User
          .find(query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
}

module.exports = User;
