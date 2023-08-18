const {
  sendOTP
} = require("../controllers/Controller");
const router = require("express").Router();
const bodyParser = require("body-parser")

router.post("/sendOTP",bodyParser.json() , sendOTP);


module.exports = router;