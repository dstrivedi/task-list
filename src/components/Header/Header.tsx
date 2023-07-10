
import * as React from 'react';

import './Header.css';
import AddTask from '../AddTask/AddTask';

import { taskProps } from '../../App';

const Header :React.FC<taskProps> = ({taskList})  => {
  return (
    <div className="header">
      <h1>Task list</h1>
      <AddTask taskList = {taskList}/>
    </div>
  );
}

export default Header;
