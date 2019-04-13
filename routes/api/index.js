const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require('./user.routes');
const propRoutes = require('./prop.routes');

// Auth routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/properties", propRoutes)

module.exports = router;