import logo from './logo.svg';
import './App.css';
import TaskInput from './components/taskInput';
import Navigator from './components/Navbar';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([{name: 'Task 1', description: 'Description 1', date: '2021-09-01', time: '12:00'}])
  return (
    <Navigator 
      tasks={tasks}
      setTasks={setTasks}
    />
    
  );
}

export default App;
