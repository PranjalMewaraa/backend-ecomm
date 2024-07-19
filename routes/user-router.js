const router = require("express").Router();

const usercontroller = require("../controller/user-controller");

router.post("/user", usercontroller.SignupUser);

module.exports = router;
