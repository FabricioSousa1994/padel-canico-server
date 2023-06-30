const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const saltRounds = 10;

//GET a user
router.get("/:userId", async (req, res) => {
  try {
    const response = await User.findById(req.params.userId).populate(
      "reservations"
    );
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});


//EDIT user (email and password)
router.put("/settings/:userId", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    // Check if email or password or name are provided as empty strings
    if (email === "" || password === "" || name === "" || phone === "") {
      res.status(400).json({ message: "Please fill all the fields" });
      return;
    }

    // This regular expression check that the email is of a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Provide a valid email address." });
      return;
    }

    // This regular expression checks password for special characters and minimum length
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        message:
          "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
      });
      return;
    }

    // If email is unique, proceed to hash the password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const response = await User.findByIdAndUpdate(
      req.params.userId,
      { email, password: hashedPassword, name, phone },
      { new: true }
    );
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});


module.exports = router;