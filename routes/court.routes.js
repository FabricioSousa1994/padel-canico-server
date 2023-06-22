const router = require("express").Router();
const Court = require("../models/Court.model");

//GET courts
router.get("/", async (req, res) => {
  try {
    const response = await Court.find();
    console.log(response);
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});



module.exports = router;
