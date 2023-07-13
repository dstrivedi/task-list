import * as React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import DeleteTask from './components/DeleteTask/DeleteTask';

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

const App:React.FC = () => {

  const [open, setOpen] = React.useState<boolean>(false)
  const [task, setTask] = React.useState<TaskList[]>(JSON.parse(`${localStorage.getItem('taskList')}`))
  const [title, setTitle] = React.useState<string>('');
  const [priority, setPriority] = React.useState<string>('low')
  const [status, setStatus] = React.useState<string>('To do')
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

  const handleOpen = ():void => {
    setOpen(true)
  }

  const handleClose = ():void => {
    setOpen(false)
  }

  const handleTaskValue = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(e.currentTarget.value)
  }

  const addTask = ():void => {
    if(title == "") {
      alert("Please enter task title")
    } else {
      const id = task.length > 0 ? (parseInt(task[task.length-1].id) + 1).toString() : "1";
      let newTask : TaskList = {id: id, title: title, priority: priority, status: status, progress: 0};
      if(task.length > 0) {
        setTask([...task, newTask])
      } else {
        setTask([newTask]);
      }
      setOpen(false);
      setTitle('');
    }
  }

  const deleteTask = (id:number) : void => {
    let newTask = task.filter((t) => parseInt(t.id) != id);
    setTask(newTask);
    setConfirmDialog({open: false, id:0});
  }

  const handlePriority = (value:string):void => {
    setPriority(value);
  }

  return (
    <Container maxWidth="md">
      <AddTask open={open} title={title} priority = {priority} handleOpen = {handleOpen} handleClose={handleClose} addTask={addTask} handleTaskValue={handleTaskValue} handlePriority={handlePriority}/>
      <TaskList taskList={task} handleOpenConfirmDdialog={handleOpenConfirmDialog}/>
      <DeleteTask deleteTask={deleteTask}  handleCloseConfirmDialog={handleCloseConfirmDialog} dialogObj={openConfirmDialog}/>
    </Container>
  );
}

export default App;
