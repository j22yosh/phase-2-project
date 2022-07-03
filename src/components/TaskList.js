import React from 'react'


function TaskList({tasks}) {
  


 

  return (
    <div>This is where all tasks will be displayed!
      <div>Current tasks</div>
      {
        tasks.map(function(task, id){
          console.log(task.id)
          return<ul key={task.id}>{task.task}</ul>
        })
      }
    </div>
    
    
  )
  
}

export default TaskList