import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TaskInput from './taskInput';
import ListTasks from './ListTasks';
import { useState } from 'react';


const Navigator = ({tasks,setTasks}) => {
    const [show, setShow] = React.useState(false)
    const [listTask, setListTask] = React.useState(false)
    const [activeComponent, setActiveComponent] = useState('');
  
const handleCreate = () => {
    console.log('Create task')
    setShow(true)
    setActiveComponent('create');
}

const handleList = () => {
    console.log('List task')
    setListTask(true)
    setActiveComponent('list');

}


  return (
    <>
    <Navbar  bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className="text-light" href="#home">Itineary planner</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={handleCreate} className="text-light" href="#create">Create a task</Nav.Link>
        <Nav.Link onClick={handleList} className="text-light" href="#list">List Tasks</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  {show && activeComponent === 'create' &&
   <TaskInput
  tasks = {tasks}
  setTasks = {setTasks}
    setActiveComponent = {setActiveComponent}
   />}
   {listTask && activeComponent === 'list' &&
   <ListTasks tasks={tasks}
   setTasks={setTasks}
    />}
</>
)
}

export default Navigator