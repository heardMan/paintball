const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require('./user.routes');
const ticketRoutes = require('./ticket.routes');
const propRoutes = require("./Property.routes");

// Auth routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);
router.use("./Properties", propRoutes);

module.exports = router;