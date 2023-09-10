const taskModel = require('../model/taskModel');

const getTask = async (req, res) => {
    try{
        const tasks = await taskModel.findAll();
        return res.status(200).json({tasks});
    }catch(err) {
        console.log("This error ocurred: " + err);
        return res.status(500).json({msg: "Task were not found"});
    }
}


const addTask = async (req, res) => {
    try{
        const {task} = req.body;
        await taskModel.create({task});
        return res.status(201).json({msg: "task created with success"}); 
    }catch(err) {
        console.log("This error ocurred: " + err);
        return res.status(500).json({msg: "The task wasn't added"});
    }
}

const updateTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const { task: updatedTask } = req.body;
        const task = await taskModel.findByPk(taskId);

        if(!task) {
            return res.status(404).json({msg: "Task not found"});
        }
        
        await task.update({task: updatedTask});
        return res.status(200).json({msg: "Task updated with success"}); 
    }catch(err) {
        console.log("This error ocurred: " + err);
        return res.status(500).json({msg: "The task wasn't updated"});
    }
}

const deleteTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const task = await taskModel.findByPk(taskId);
        if(!task) {
            return res.status(404).json({msg: "Task doesn't exists"});
        }
        await task.destroy();
        return res.status(200).json({msg: "Task deleted with success"});
    }catch(err) {
        console.log("This error ocurred: " + err);
        return res.status(500).json({msg: "The task wasn't deleted"});
    }
}

const deleteAllTasks = async (req, res) => {
    try{
        const tasks = await taskModel.findAll();

        if(tasks.length === 0) {
            return res.status(404).json({msg: "No tasks to delete"});
        }
    
        await taskModel.destroy({
            where: {},
        })
        return res.status(200).json({msg: "All tasks have been deleted"});
    }catch(err) {
        console.log("This error ocurred: " + err);
        return res.status(500).json({msg: "The tasks weren't deleted"});
    }
}

module.exports = {getTask, addTask, updateTask, deleteTask, deleteAllTasks};