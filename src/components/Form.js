import React, { useState } from 'react';

const Form = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button>Submit</button>
        </form>
    );
};

export default Form;

//   function handleAdd(e) {
//     e.preventDefault();
//     const newTask = { description: entry, id: entry };
//     setTasks([...tasks, newTask]);
//     console.log(e);
//   }
//   function handleDel(e) {
//     e.preventDefault();
//     console.log(e);
//   }