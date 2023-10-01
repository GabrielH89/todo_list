import './todoList.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function TodoList() {
    const [task, setTask] = useState("");
    const [showTask, setShowTask] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false); 
    const [editingTasks, setEditingTasks] = useState({});
    const [editedTask, setEditedTask] = useState("");

    useEffect(() => {
        const getTask = async () => {
            try {
                const response = await axios.get("http://localhost:4000/");
                setShowTask(response.data.tasks);
                console.log(response.data.tasks);
            } catch (err) {
                console.log("Ocurred this error: " + err);
            }
        }
        getTask();
    }, [shouldUpdate]); 

    const addTask = async (e) => {
        e.preventDefault();
        const taskData = new FormData();
        taskData.append("task", task);
        try {
            if (task.trim().length > 0) {
                await axios.post("http://localhost:4000/addTask", taskData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setTask(""); 
                setShouldUpdate(!shouldUpdate); 
            } else {
                alert("Insira uma tarefa");
            }
        } catch (err) {
            console.log("This error ocurred: " + err);
        }
    }

    const startEditing = (taskId, task) => {
        setEditingTasks({ ...editingTasks, [taskId]: true });
        setEditedTask(task);
    };
    
    const saveEditedTask = async (id) => {
        try {
            if (editedTask.trim().length === 0) {
                alert("O campo precisa estar preenchido!");
            }else{
                await axios.put(`http://localhost:4000/updateTask/${id}`, {
                    task: editedTask,
                });
                setEditingTasks({ ...editingTasks, [id]: false });
                setShouldUpdate(!shouldUpdate);
            }
        } catch (err) {
            console.log("This error occurred: " + err);
        }
    };
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(!shouldUpdate);
            addTask(e);
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/deleteTask/${id}`)
            setShouldUpdate(!shouldUpdate)
        }catch(err){
            console.log("This error ocurred: " + err);
        }
    }

    const deleteAllTasks = async () => {
        const shouldDelete = window.confirm("Tem certeza que deseja excluir todas as tarefas?");
        if(shouldDelete){
            try{
                await axios.delete("http://localhost:4000/deleteAllTasks");
                setShouldUpdate(!shouldUpdate);
            }catch(err){
                console.log("This error ocurred: " + err);
            }
        }
    }

    const handleKeyUp = (e, id) => {
        if (e.key === "Enter") {
            e.preventDefault();
            saveEditedTask(id);
        }
    }

    return (
        <div>
            <div className="content">
                <div className="top">
                    <form>
                        <input
                            type="text"
                            id="inputNameTask"
                            placeholder="Adicione uma nova tarefa"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button type="button" id="btnAddTask" onClick={addTask}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className='taskContainer'>
             
                {showTask.length > 0 && (
                    <button
                    id='deleteAllTasks'
                    onClick={deleteAllTasks}
                    disabled={showTask.length === 0}>
                    Deletar tarefas
                        </button>
                )}
                <ul id="listTask">
               {showTask.map((taskItem) => (
                
    <   li key={taskItem.id}>
            {editingTasks[taskItem.id] ? (  
                <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    onKeyUp={(e) => handleKeyUp(e, taskItem.id)} // Adicione o evento onKeyUp
                />
            ) : (
                <span className="textTask">{taskItem.task}</span>
        )}
        <div>
            {editingTasks[taskItem.id] ? (
                <button
                    className="btnAction"
                    onClick={() => saveEditedTask(taskItem.id)}
                >
                    <i className="fa fa-check"></i>
                </button>
            ) : (
                <button
                    className="btnAction"
                    onClick={() => startEditing(taskItem.id, taskItem.task)}
                >
                    <i className="fa fa-pencil"></i>
                </button>
            )}
            <button className="btnAction" onClick={() => deleteTask(taskItem.id)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    </li>
))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;
