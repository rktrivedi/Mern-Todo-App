const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

router.post("/addTask", async (req, res) => {
  try {
    const {title, body, email, dueDate} = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser) {
      const list = new List({title, body, dueDate, user: existingUser});
      await list.save().then(() => res.status(200).json({list}));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// API for Updating  To do List

router.put("/updateTask/:id", async (req, res) => {
  try {
    const {title, body, email, dueDate} = req.body;

    const existingUser = await User.findOne({email});
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, {title, body});
      list.save().then(() => res.status(200).json({message: "Task Updated"}));
    }
  } catch (error) {
    console.log(error);
  }
});

//API FOR DELEATING TASK

router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const {email} = req.body;

    const existingUser = await User.findOneAndUpdate(
      {email},
      {$pull: {list: req.params.id}}
    );
    if (existingUser) {
      const list = await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({message: "Task Deleted"})
      );
    }
  } catch (error) {
    console.log(error);
  }
});

// Fetch Task For User

router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({user: req.params.id}).sort({createdAt: -1});
  if (list.length !== 0) {
    res.status(200).json({list});
  } else {
    res.status(200).json({message: "No Task Available"});
  }
});
module.exports = router;
