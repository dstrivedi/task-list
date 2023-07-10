import * as React from 'react';
import Card from '@mui/material/Card';

import './TaskList.css';

import { taskProps } from '../../App';

const TaskList : React.FC<taskProps> = ({taskList }) => {
  return (
    <div className="taskList">
      {taskList.map((task) => {
        return (
          <Card className="taskCard" key={task.id}>
          <div>
            <span>Title</span>
            <p>{task.title}</p>
          </div>
          <div>
            <span>Priority</span>
            <p>{task.priority}</p>
          </div>
          <div>
            <span>Status</span>
            <p>{task.status}</p>
          </div>
          <div>
            <span>Actions</span>
            <p></p>
          </div>
        </Card>
        )
      })}
    </div>
  );
}

export default TaskList;
