import React,{ useState}  from 'react'
import Form from './Form';


 
function TaskList({tasks}) {
 

 function handleclick(event){
  if (event.target.style.textDecoration) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }
};
  


//    setIsDone((isDone) => !isDone)
//   console.log(e.target.textContent);
// }

 

  return (
    <div>This is where all tasks will be displayed!
      <div>Current tasks</div>
      {
        tasks.map(function(task, id){
          
          return<ul 
          //  className={isDone ? 'strike': ""}
           onClick={handleclick} 
            key={task.id}>{task.task}</ul>
        })
      }
      <Form />
    </div>
    
    
  )
  
}

export default TaskList