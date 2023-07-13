import * as React from 'react';
import Card from '@mui/material/Card';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './TaskList.css';
import DeleteTask from '../DeleteTask/DeleteTask';

type taskProps = {
  taskList: any[];
  handleOpenConfirmDdialog:(id: number) => void;
}

const TaskList : React.FC<taskProps> = ({taskList, handleOpenConfirmDdialog}) => {

  return (
    <div className="taskList">
      {taskList && taskList.map((task) => {
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
            <p><FontAwesomeIcon className='editIcon' icon={faEdit as IconProp} style={{color: "#1b265f",}} />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon onClick={() => handleOpenConfirmDdialog(task.id)} className='deleteIcon' icon={faTrash as IconProp} style={{color: "#f00000",}} /></p>
          </div>
        </Card>
        )
      })}
    </div>
  );
}

export default TaskList;
