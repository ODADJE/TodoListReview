const express = require("express");
const Task = require("../models/taskModel");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.render("index");
// });

router.get("/", (req, res) => {
  Task.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index",{tasks: result});
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
