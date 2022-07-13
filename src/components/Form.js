import React, { useState } from "react";


const Form = ({ tasks, setTasks }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
   
  };

 const handleID =  tasks.length
 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    const newTodo = {
      "id": {handleID},
      "task": {userInput},
      "complete":false
    }

    fetch("http://localhost:8000/tasks"), {
      method: 'POST',
      headers: new Headers({
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }),
       body: JSON.stringify(newTodo)
  }
  .then(response => response.json())
  .then(data => {
    setTasks((tasks) => [...tasks], newTodo)
  })
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;


