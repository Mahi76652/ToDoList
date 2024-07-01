import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import NotFound from './components/NotFound';
import { Container, Header, Navbar, NavbarList, NavbarItem, NavbarLink } from './components/StyledComponents';
import './components/animations.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Learn React Router' },
  ]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  const updateTodo = (id, updatedTask) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Router>
      <Container>
        <Header>Todo List Application</Header>
        <Navbar>
          <NavbarList>
            <NavbarItem>
              <NavbarLink to="/">Home</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/todos">Todo List</NavbarLink>
            </NavbarItem>
          </NavbarList>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
          <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
          <Route path="/edit/:id" element={<EditTodo todos={todos} updateTodo={updateTodo} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
