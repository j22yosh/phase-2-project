import React from "react";
import Form from "./Form";

function TaskList({ tasks, setTasks }) {
  function handleclick(event) {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  }

 
  return (
    <div>
      This is where all tasks will be displayed!
      <div>Current tasks</div>
      {tasks.map(function (task, id) {
        return (
          <ul
            
            onClick={handleclick}
            key={task.id}
          >
            {task.task}
          </ul>
        );
      })}
      <Form  tasks ={tasks} setTasks = {setTasks}/>
    </div>
  );
}

export default TaskList;
