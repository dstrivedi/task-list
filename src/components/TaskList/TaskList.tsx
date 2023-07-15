import * as React from 'react';
import Card from '@mui/material/Card';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import './TaskList.css';
import { CardContent, CircularProgress } from '@mui/material';

type taskProps = {
  taskList: any[];
  handleOpen: (flag: string, id?: number) => void;
  handleOpenConfirmDdialog:(id: number) => void;
}

const TaskList : React.FC<taskProps> = ({taskList, handleOpenConfirmDdialog, handleOpen}) => {

  return (
    <div className="taskList">
      {taskList.length > 0 ? taskList.map((task) => {
        let progress = 0;
        if(task.status == "To do") {
          progress = 25;
        } else if(task.status == "In progress") {
          progress = 50;
        } else if (task.status = "Done") {
          progress = 100;
        }
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
            <span>Progress</span>
            <p> 
              <CircularProgress variant="determinate" size={30} sx={{ml: 1}}  value={progress} color='primary'></CircularProgress>
            </p>
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
