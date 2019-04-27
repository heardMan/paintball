const db = require("../models");
const Lease = {
    create: function(req, res) {
        console.log(req.body);
        db.Lease
          .create(req.body)
          .then(dbModel => {
            dbModel.tenants.forEach(tenant => {
                console.log(tenant);
                   db.User
                   .findByIdAndUpdate(tenant,
                    { "$push": { "leases": dbModel._id, "leased_properties": dbModel.property  } },
                    
                    { "new": true, "upsert": true },
                    // function (err, managerparent) {
                    //     if (err) throw err;
                    //     console.log("111111"+managerparent);
                    // }
                    )
                    .then(resp =>{
                        //console.log(resp.data);
                    })
                
              });

              db.Property
                   .findByIdAndUpdate(dbModel.property,
                    { "$push": { "leases": dbModel._id } }
                    // { "new": true, "upsert": true },
                    // function (err, managerparent) {
                    //     if (err) throw err;
                    //     console.log(managerparent);
                    // }
                    )
                    .then(resp =>{
                        console.log("PROPERTY DATA");

                        resp.managers.forEach(manager => {
                            console.log(manager);
                               db.User
                               .findByIdAndUpdate(manager,
                                { "$push": { 
                                             "managed_properties": dbModel._id },
                                             "managed_leases": dbModel._id  }
                                
                                // { "new": true, "upsert": true },
                                // function (err, managerparent) {
                                //     if (err) throw err;
                                //     console.log(managerparent);
                                // }
                                )
                                .then(resp =>{
                                    console.log(resp.data);
                                })
                            
                          });

                        console.log(resp);
                    })



              res.json(dbModel)

            })
          .catch(err => res.status(422).json(err));
      },
      findOne: function (req, res) {
        const query = {roles: req.body};
        console.log(query)
        // db.Lease
        //   .find(query)
        //   .then(dbModel => res.json(dbModel))
        //   .catch(err => res.status(422).json(err));
    }
}
module.exports = Lease;
