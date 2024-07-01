import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Container,
  Header,
  TodoListContainer,
  TodoItem,
  Button,
} from './StyledComponents';
import './animations.css'; // Create this CSS file for custom animations

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Container>
      <Header>Todo List</Header>
      <TodoListContainer>
        <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="fade">
              <TodoItem>
                {todo.task}
                <div>
                  <Button as={Link} to={`/edit/${todo.id}`} style={{ marginRight: '10px' }}>Edit</Button>
                  <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
                </div>
              </TodoItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </TodoListContainer>
      <Button as={Link} to="/add">Add Todo</Button>
    </Container>
  );
};

export default TodoList;
