import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditTask = ({ task, handleEdit }) => {
  const [show, setShow] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleSubmit = () => {
    //Trim the input values
    updatedTask.name = updatedTask.name.trim();
    updatedTask.description = updatedTask.description.trim();
    updatedTask.date = updatedTask.date.trim();
    updatedTask.time = updatedTask.time.trim();
    if (!updatedTask.name || !updatedTask.description || !updatedTask.date || !updatedTask.time) {
      alert('Please fill in all fields.');
      return;
    }
    handleEdit(updatedTask);
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form noValidate className='needs-validation'>
            <Form.Group controlId="formTaskName" className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedTask.name}
                onChange={handleChange}
                readOnly
                className="bg-secondary text-white"
                required
              />
            </Form.Group>
            <Form.Group controlId="formTaskDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
                className="bg-secondary text-white"
                required
              />
            </Form.Group>
            <Form.Group controlId="formTaskDate" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={updatedTask.date}
                onChange={handleChange}
                className="bg-secondary text-white"
                required
              />
            </Form.Group>
            <Form.Group controlId="formTaskTime" className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={updatedTask.time}
                onChange={handleChange}
                className="bg-secondary text-white"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTask;
