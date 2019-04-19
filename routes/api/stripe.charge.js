require("dotenv").config();
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

router.post("/", (req, res) => {
    res.json({msg: "connected"})
    const amount = req.body.amount * 100;
    // Create a new customer and then a new charge for that customer:
    stripe.customers.create({
      email: req.body.email
    }).then((customer) => {
      return stripe.customers.createSource(customer.id, {
        source: 'tok_visa'
      });
    }).then((source) => {
      return stripe.charges.create({
        amount,
        currency: 'usd',
        customer: source.customer
      });
    }).then((charge) => {
        console.log("successful charge!!");
      // save customer stripe id to database ( charge.customer )
    }).catch((err) => {
      console.log(err)
    });
  })

  module.exports = router;