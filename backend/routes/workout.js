const express = require("express");

const Workout = require("../models/WorkoutModel");

const router = express.Router();

//   api/workouts + /        get    localhost:4000/api/workouts/
//   get all workouts
router.get("/", (req, res) => {
  res.json({ mssag: "get all workouts" });
});

//get one workout         get      localhost:4000/api/workouts/1
router.get("/:id", (req, res) => {
  res.json({ mssg: "get one workout" });
});

//post one workout              post    localhost:4000/api/workouts/
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } 
  catch (error)
   {
    res.status(400).json({ error: error.message });
  }
});

//delete one                     delete    localhost:4000/api/workouts/1
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete " });
});

//update                       update     localhost:4000/api/workouts/1
router.patch("/:id", () => {
  res.json({ mssg: "update" });
});

module.exports = router; // export ediyoruz ki başka yerde import edebileleim
