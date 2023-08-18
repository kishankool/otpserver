const {
  sendOTP
} = require("../controllers/Controller");
const router = require("express").Router();


router.post("/sendOTP", sendOTP);


module.exports = router;