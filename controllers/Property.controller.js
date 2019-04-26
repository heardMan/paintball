const db = require("../models");

const Property = {
    create: function(req, res) {
        db.Property
          .create(req.body)
          .then(dbModel => {
              
              dbModel.managers.forEach(manager => {
                console.log(manager);
                   db.User
                   .findByIdAndUpdate(manager,
                    { "$push": { "managed_properties": dbModel._id } },
                    { "new": true, "upsert": true },
                    function (err, managerparent) {
                        if (err) throw err;
                        console.log(managerparent);
                    }
                );
              });
              res.json(dbModel);
            })
          .catch(err => res.status(422).json(err));
      },
      findOne: function(req, res){
        const query = {_id: req.params.id};
        db.Property
        .find(query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      },
}

module.exports = Property;