require('dotenv').config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const db = require("./models");

//connect to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/paintball");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}
var date = new Date();
console.log("CHECK")
console.log(date.getDate()-1)


const rightMeow = date.getDate()+1;
db.Meta.find({ SUPER_ID: "dolladollabillsyall" })
  .then(resp => {
    console.log(resp[0].lastUpdated);
    console.log(resp[0].lastUpdated.getDate())
    if (resp[0].lastUpdated.getDate() !== rightMeow) {
      db.Lease.find({ dueDate: date.getDate() })
        .then(resp => {
          console.log("BILL TIME BITCHES")
          console.log(resp)
          resp.forEach(lease =>{
            const bill = {
              lease: lease._id,
              tenant: lease.tenants,
              property: lease.property,
              amount: lease.rate,
              balance: lease.rate,
              dueDate: date.addDays(5),
              paid: false
            }
            db.Payment.create(bill)
            .then(resp =>{

              console.log("LAST"+resp);

              db.Lease.findByIdAndUpdate(resp.lease[0], {"$push": {"payments": resp._id}})
              .then(resp=>{
                console.log("Lease updated"+resp);
              })

              db.Property.findByIdAndUpdate(resp.property[0], {"$push": {"payments": resp._id}})
              .then(resp=>{
                console.log("Lease updated"+resp);
              })

              db.Meta.find({ SUPER_ID: "dolladollabillsyall"}, {lastUpdated: Date.now} )
              .then(resp=>{
                console.log("Meta updated"+resp);
              })

              resp.tenant.forEach(tenant=>{
                db.User.findByIdAndUpdate(tenant, {"$push": {"payments": resp._id}})
              .then(resp=>{
                console.log("Lease updated"+resp);
              })
              })

            })
          })

        })
        .catch(err => { console.log(err) })
    }

  })
  .catch(err => { console.log(err) })





app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
