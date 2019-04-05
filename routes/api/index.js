const router = require("express").Router();
const authRoutes = require("./auth");

// Auth routes
router.use("/auth", authRoutes);

module.exports = router;