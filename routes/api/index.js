const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require('./user.routes');
const ticketRoutes = require('./ticket.routes');

// Auth routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/tickets", ticketRoutes);

module.exports = router;