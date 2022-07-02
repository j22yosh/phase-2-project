import React from 'react'


function TaskList({tasks}) {


 

  return (
    <div>This is where all tasks will be displayed!
      <div style={{ color: 'blue', lineHeight : 10, padding: 20 }}>Current tasks</div>
      {
        tasks.map(function(task, id){
          console.log(task.id)
          return<li key={task.id}>{task.task}</li>
        })
      }
    </div>
    
    
  )
  
}

export default TaskList