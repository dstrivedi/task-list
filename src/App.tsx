import * as React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import DeleteTask from './components/DeleteTask/DeleteTask';
import { SelectChangeEvent } from '@mui/material';

export type TaskList = {
  id: string;
  title: string;
  priority: string;
  status: string;
  progress: number;
}

export type obj = {
  open: boolean;
  id: number;
}

export type addEditDialogObj = {
  open: boolean;
  flag: string;
  id: number;
}

const App:React.FC = () => {

  const [open, setOpen] = React.useState<addEditDialogObj>({open: false, flag: '', id:0})
  const [task, setTask] = React.useState<TaskList[]>(JSON.parse(`${localStorage.getItem('taskList')}`))
  const [title, setTitle] = React.useState<string>('');
  const [priority, setPriority] = React.useState<string>('low')
  const [status, setStatus] = React.useState<string>('')
  const [openConfirmDialog, setConfirmDialog ] = React.useState<obj>({open: false, id:0});

  const handleOpenConfirmDialog = (id:number) : void => {
    setConfirmDialog({open: true, id: id})
  }

  const handleCloseConfirmDialog = () : void => {
    setConfirmDialog({open : false, id: 0})
  }


  React.useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(task))
  },[task])

  const handleOpen = (flag:string, id?: number):void => {
    if(typeof id != 'undefined' && flag == 'edit') {
      setOpen({open: true, flag: flag, id: id})
      let modifyTask: TaskList[] = task.filter((t) => parseInt(t.id) == id);
      setTitle(modifyTask[0].title);
      setStatus(modifyTask[0].status)
    } else {
      setOpen({open: true, flag: flag, id:0})
      setTitle('');
      setStatus('');
    }
  }

  const handleClose = ():void => {
    setOpen({open: false, flag: '', id: 0})
  }

  const handleTitle = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(e.currentTarget.value)
  }

  const addTask = ():void => {
    if(title == "") {
      alert("Please enter task title")
    } else {
      // if(task != null) {
        const id = task!= null ? (parseInt(task[task.length-1].id) + 1).toString() : "1";
        let newTask : TaskList = {id: id, title: title, priority: priority, status: status, progress: 0};
        if(task.length > 0) {
          setTask([...task, newTask])
        } else {
          setTask([newTask]);
        }
      // }
      setOpen({open: false, flag: '', id: 0})
      setTitle('');
      setStatus('');
    }
  }

  const deleteTask = (id:number) : void => {
      let newTask = task.filter((t) => parseInt(t.id) != id);
      setTask(newTask);
      setConfirmDialog({open: false, id:0});
    
  }

  const editTask = (id:number) :void => {
    let modifyTasks = task.map((t) => {
      if(parseInt(t.id) == id) {
        t.title = title;
        t.status = status;
        t.priority = priority;
      }
      return {...t};
    });
    setTask(modifyTasks);
    setOpen({open: false, flag: '', id: 0});
  }

  const handlePriority = (value:string):void => {
    setPriority(value);
  }

  const handleStatus = (e:SelectChangeEvent):void => {
    setStatus(e.target.value);
  }

  return (
    <Container maxWidth="md">
      <AddTask status={status} handleStatus={handleStatus} editTask={editTask} addEditDialogObj={open} title={title} priority = {priority} handleOpen = {handleOpen} handleClose={handleClose} addTask={addTask} handleTitle={handleTitle} handlePriority={handlePriority}/>
      <TaskList taskList={task} handleOpen = {handleOpen} handleOpenConfirmDdialog={handleOpenConfirmDialog}/>
      <DeleteTask deleteTask={deleteTask}  handleCloseConfirmDialog={handleCloseConfirmDialog} dialogObj={openConfirmDialog}/>
    </Container>
  );
}

export default App;
