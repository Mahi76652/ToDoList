import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Header, Input, Button } from './StyledComponents';

const EditTodo = ({ todos, updateTodo }) => {
  const { id } = useParams();
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      setTask(todo.task);
    }
  }, [id, todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(parseInt(id), task);
    navigate('/todos');
  };

  return (
    <Container>
      <Header>Edit Todo</Header>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
};

export default EditTodo;
