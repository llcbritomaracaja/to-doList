import React, { useState } from 'react'
import { TiDelete } from "react-icons/ti";


const AddTask = () => {
    const [newTask, setNewTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const [checkboxTrueFalse, setCheckboxTrueFalse] = useState(false);
    
    const handleTask = (e) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newTask.trim() !== ''){
        setTaskList([...taskList, {text: newTask, completed: false}])
    }
    setNewTask("");
    };

    const toggledCheckbox = (index) =>{
        const updatedTasks = [...taskList];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTaskList(updatedTasks);
    }

    const deleteTask = (indexToDelete) =>{
        setTaskList(taskList.filter((_, index) => index !== indexToDelete))
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <h3>To-do List</h3>
                <input type="text" placeholder='Add new task' name='addTask' onChange={handleTask} value={newTask}/>
                <input type="submit" value="Done"/>
            </div>
        </form>

        <div>
            <h3>Task List: </h3>
                {taskList.map((task, index) => (
                    <h4 key={index}>
                        <input type="checkbox" id={`task-${index}`} onChange={() => toggledCheckbox(index)} />

                        {task.completed ? (
                            <label htmlFor= {`task-${index}`} >
                                <s>{task.text}</s>
                            </label>
                        ):(
                            <label htmlFor= {`task-${index}`}> {task.text} </label>
                        )}                  

                        <label onClick={() => deleteTask (index)}> <TiDelete/> </label>

                    </h4>
                ))}
        </div>
    </>
  )
}


export default AddTask