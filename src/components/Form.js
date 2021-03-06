import React, { useState } from "react";

const Form = ({ tasks, newTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  

  const handleID = tasks.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
    const TodoList = {
      task: userInput,
         
      complete: false,
      }

    

    fetch("http://localhost:8000/tasks",
      {
        method: "POST",
        headers: {
                  "Content-Type": "application/json",
        },
        body: JSON.stringify(TodoList)
      })
        .then((response) => response.json())
        .then(data => newTodo(data));
  setUserInput("")      
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
