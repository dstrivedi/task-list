import * as React from 'react';
import Card from '@mui/material/Card';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './TaskList.css';
import { CardContent } from '@mui/material';

type taskProps = {
  taskList: any[];
  handleOpen: (flag: string, id?: number) => void;
  handleOpenConfirmDdialog:(id: number) => void;
}

const TaskList : React.FC<taskProps> = ({taskList, handleOpenConfirmDdialog, handleOpen}) => {

  return (
    <div className="taskList">
      {taskList.length > 0 ? taskList.map((task) => {
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
            <p><FontAwesomeIcon className='editIcon' onClick={() => handleOpen('edit', task.id)} icon={faEdit as IconProp} style={{color: "#1b265f",}} />&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon onClick={() => handleOpenConfirmDdialog(task.id)} className='deleteIcon' icon={faTrash as IconProp} style={{color: "#f00000",}} /></p>
          </div>
        </Card>
        )
      }) : <Card className='taskCard' style={{textAlign: 'center'}}><CardContent style={{fontWeight: "bold", fontSize:'1.2rem'}}>No tasks found</CardContent></Card>}
    </div>
  );
}

export default TaskList;
