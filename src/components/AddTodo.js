import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Input, Button } from './StyledComponents';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    navigate('/todos');
  };

  return (
    <Container>
      <Header>Add Todo</Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter new task"
          required
        />
        <Button type="submit">Add</Button>
      </form>
    </Container>
  );
};

export default AddTodo;
