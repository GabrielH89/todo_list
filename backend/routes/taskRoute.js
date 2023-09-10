const express = require('express');
const {getTask, addTask, updateTask, deleteTask, deleteAllTasks} = require('../controller/taskController');

const router = express.Router();

router.get("/", getTask);
router.post("/addTask", addTask);
router.put("/updateTask/:id", updateTask)
router.delete("/deleteTask/:id", deleteTask);
router.delete("/deleteAllTasks", deleteAllTasks);

module.exports = router;