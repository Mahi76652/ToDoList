import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #121212; /* Dark background */
  color: white; /* Text color */
  min-height: 100vh; /* Full viewport height */
`;

export const Header = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #ff4757; /* Red color */
`;

export const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TodoItem = styled.li`
  background: #1e1e1e; /* Darker background */
  border: 1px solid #444; /* Dark border */
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  background: #ff4757; /* Red background */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #ff6b81; /* Lighter red */
  }
  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #444; /* Dark border */
  width: calc(100% - 22px);
  margin-bottom: 10px;
  background-color: #1e1e1e; /* Darker background */
  color: white;
  &:focus {
    outline: none;
    border-color: #ff4757; /* Red border on focus */
  }
`;

export const Navbar = styled.nav`
  background: #000; /* Black background */
  padding: 10px 0;
`;

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li`
  margin: 0 15px;
`;

export const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s;
  &:hover {
    color: #ff4757; /* Red on hover */
  }
`;
