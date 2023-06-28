import * as React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <TaskList />
    </Container>
  );
}
