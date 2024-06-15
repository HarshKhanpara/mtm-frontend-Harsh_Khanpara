import React from 'react';
import Card from 'react-bootstrap/Card';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const ListTasks = ({ tasks, setTasks }) => {

  const handleDelete = (taskName) => {
    const newTasks = tasks.filter((task) => task.name !== taskName);
    setTasks(newTasks);
  };

  const handleEdit = (updatedTask) => {
    const newTasks = tasks.map((task) =>
      task.name === updatedTask.name ? updatedTask : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">List of Tasks</h1>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-lg-4 col-md-6 mb-4" key={task.id}>
            <Card bg="dark" text="white" className="h-100">
              <Card.Body>
                <Card.Title>{task.name}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>{task.date}</Card.Text>
                <Card.Text>{task.time}</Card.Text>
                <div className="d-flex justify-content-between mt-4">
                  <DeleteTask taskName={task.name} handleDelete={handleDelete} />
                  <EditTask task={task} handleEdit={handleEdit} />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
