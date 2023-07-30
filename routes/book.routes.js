const router = require("express").Router();
const Book = require("../models/Book.model");
const User = require("../models/User.model");


//CREATE RESERVATION - POST
router.post("/reservation", async (req, res) => {
  try {
    const { user, court, startTime, endTime, date } = req.body;

    const response = await Book.create({
      user,
      court,
      startTime,
      endTime,
      date,
    });

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//GET reservation
router.get("/", async (req, res) => {
  try {
    const response = await Book.find();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//GET single reservation
router.get("/:reservationId", async (req, res) => {
  try {
    const response = await Book.findById(req.params.reservationId);
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//UPDATE reservation 
router.patch("/edit/:reservationId", async (req, res) => {
  try {
    const { startTime, endTime, date } = req.body;

    const response = await Book.findByIdAndUpdate(
      req.params.reservationId,
      {
        startTime,
        endTime,
        date,
      },
      { new: true }
    );
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

//DELETE reservation

router.delete("/:reservationId", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.reservationId);
    res.status(200).json({
      message: `Reservation with id ${req.params.reservationId} was deleted`,
    });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = router;
