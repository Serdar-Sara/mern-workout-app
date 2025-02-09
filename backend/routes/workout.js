const express = require("express");

const {
    createWorkout,
     getWorkouts,
     getWorkout
}=require('../controllers/workoutController')



const router = express.Router();

//   api/workouts + /        get    localhost:4000/api/workouts/
//   get all workouts
router.get("/", getWorkouts);

//get one workout         get      localhost:4000/api/workouts/1
router.get("/:id", getWorkout);

//post one workout              post    localhost:4000/api/workouts/
router.post("/", createWorkout);

//delete one                     delete    localhost:4000/api/workouts/1
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete " });
});

//update                       update     localhost:4000/api/workouts/1
router.patch("/:id", () => {
  res.json({ mssg: "update" });
});

module.exports = router; // export ediyoruz ki başka yerde import edebileleim
