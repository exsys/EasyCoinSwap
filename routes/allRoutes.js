const express = require("express");
const router = express.Router();

// routes
router.get("/", (req, res, next) => {
    res.send("API works!");
})

// add a apiRoutes in the /routes directory and require it here so you can use this line
//router.use("/api", apiRoutes);

module.exports = router;