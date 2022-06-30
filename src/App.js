// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import TaskList from './TaskList';
import Form from './Form';
import { useState } from 'react';

function App() {
  const[tasks, setTasks] = useState([])

  return (
    <div className="App">
      <Header title="To-do App"/>
      
      
      <Routes>
        <Route path="/task-list" element={<TaskList tasks={tasks}/>}/>
        <Route path="/add-task"  element={<Form setTasks={setTasks} tasks={tasks}/>}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
