import * as React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import TaskList from './components/TaskList/TaskList';
import Header from './components/Header/Header';
import { taskList } from './data/taskList';

export type taskProps = {
  taskList: any[]
}

const App:React.FC = () => {

  return (
    <Container maxWidth="md">
      <Header taskList={taskList}/>
      <TaskList taskList={taskList}/>
    </Container>
  );
}

export default App;
