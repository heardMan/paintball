const db = require("../models");
const Lease = {
    create: function(req, res) {
        console.log(req);
        db.Lease
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}
module.exports = Lease;
