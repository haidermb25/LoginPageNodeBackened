const express = require("express");
const productController = require("../controllers/user.controllers");
const router = express.Router();

router.post("/getUser", productController.getUser);
module.exports = router;
