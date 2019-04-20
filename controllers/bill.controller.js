const db = require("../models");
const Bill = {
    create: function(req, res) {
        console.log("req.body", req.body);
        db.Bill
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}
module.exports = Bill