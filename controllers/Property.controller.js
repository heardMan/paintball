const db = require("../models");

const Property = {
    create: function(req, res) {
        db.Property
          .create(req.body)
          .then(dbModel => {
            console.log(dbModel);
              dbModel.managers.forEach(manager => {
                console.log("MANAGER:"+manager);
                
                   db.User
                   .findByIdAndUpdate(manager,
                    { "$push": { "managed_properties": dbModel._id } }
                    // { "new": true, "upsert": true },
                    // function (err, managerparent) {
                    //     if (err) throw err;
                    //     console.log(managerparent);
                    // }
                ).then(resp=>{
                  console.log(resp)
                })
                
              });

              db.User
              .findByIdAndUpdate(dbModel.owner,
               { "$push": { "owned_properties": dbModel._id } }
              //  { "new": true, "upsert": true },
              //  function (err, managerparent) {
              //      if (err) throw err;
              //      console.log(managerparent);
              //  }
           ).then(resp=>{
            console.log(resp)
          })
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
      findOwnedProperties: function(req, res){
        console.log(req.body);
        // const query = {owner: req.body.userId};
        // db.Property
        // .find(query)
        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
      },
}

module.exports = Property;