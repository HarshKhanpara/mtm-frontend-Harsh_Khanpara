import React from 'react';
import Button from 'react-bootstrap/Button';

const DeleteTask = ({ taskName, handleDelete }) => {
  return (
    <Button variant="danger" onClick={() => handleDelete(taskName)}>
      Delete
    </Button>
  );
};

export default DeleteTask;
