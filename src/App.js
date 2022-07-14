// import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import About from "./components/About";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "/home/j22yosh/Development/code/phase2/phase-2-project/src/App.css";

function App() {

  useEffect (() =>  {fetch ("http://localhost:8000/tasks")
  .then(res => res.json())
  .then(data => setTasks(data))},[]);

  
  const [tasks, setTasks] = useState([]);

  function newTodo(item){
    console.log(item)
    let newArray = [...tasks, item ]
    setTasks(newArray);}








  

  return (
    <div className="App">
      <Header title="To-do App" />
      <NavBar />

      <Routes>
        <Route
          path="/task-list"
          element={<TaskList setTasks={setTasks} tasks={tasks} newTodo={newTodo} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
