import React, { useState } from "react";


function Form({setTasks, tasks}) {
  const [entry, setEntry] = useState("");
 
  function handleAdd(e) {
    e.preventDefault();
    const newTask = {description: entry, id: entry }
    setTasks([...tasks, newTask]);
    console.log(e);
  }
  function handleDel(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form>
      <input
        type="text"
        onChange={(event) => {
          setEntry(event.target.value);
          console.log(entry);
        }}
      ></input>
      <button onClick={handleAdd}>Add item</button>
      <button onClick={handleDel}>Remove item</button>
    </form>
  );
}

export default Form;
