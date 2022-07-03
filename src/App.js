// import logo from './logo.svg';
import data from "/home/j22yosh/Development/code/phase2/phase-2-project/src/db.json"
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";
import TaskList from './components/TaskList';
import About from './components/About';
import { useState } from 'react';
import NavBar from './components/NavBar';
import '/home/j22yosh/Development/code/phase2/phase-2-project/src/App.css'

function App() {
  const[tasks, setTasks] = useState(data)

  
  

  return (
    <div className="App">
      <Header title="To-do App"/>
      <NavBar />
      
      <Routes>
        <Route path="/task-list" element={<TaskList setTasks={setTasks}tasks={tasks}/>}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
