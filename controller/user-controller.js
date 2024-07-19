const db = require("../models");

const SignupUser = async (req, res) => {
  try {
    const requestbody = req.body;
    console.log(requestbody);
    await db.Users.create(requestbody);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { SignupUser };
