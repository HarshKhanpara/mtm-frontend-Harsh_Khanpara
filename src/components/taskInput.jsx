import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const TaskInput = ({ tasks, setTasks, setActiveComponent }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [touched, setTouched] = useState({
    taskName: false,
    taskDescription: false,
    taskDate: false,
    taskTime: false,
  });

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription || !taskDate || !taskTime) {
        alert('Please fill in all fields.');
        return;
    }

    setTasks([...tasks, { name: taskName, description: taskDescription, date: taskDate, time: taskTime }]);
    setTaskName("");
    setTaskDescription("");
    setTaskDate("");
    setTaskTime("");
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Create a Task</h1>
          <Form noValidate className="needs-validation" onSubmit={saveTask}>
            <Form.Group className="mb-3" controlId="formTaskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onBlur={() => handleBlur('taskName')}
                isInvalid={touched.taskName && !taskName}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a task name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTaskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                onBlur={() => handleBlur('taskDescription')}
                isInvalid={touched.taskDescription && !taskDescription}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a task description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTaskDate">
              <Form.Label>Task Date</Form.Label>
              <Form.Control
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                onBlur={() => handleBlur('taskDate')}
                isInvalid={touched.taskDate && !taskDate}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTaskTime">
              <Form.Label>Task Time</Form.Label>
              <Form.Control
                type="time"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                onBlur={() => handleBlur('taskTime')}
                isInvalid={touched.taskTime && !taskTime}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid time.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Create Task
            </Button>
          </Form>
          {isSaved && (
            <Alert variant="success" className="mt-3">
              Task saved successfully
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TaskInput;

