import * as React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';

export type TaskList = {
  id: string;
  title: string;
  priority: string;
  status: string;
  progress: number;
}

const App:React.FC = () => {

  const [open, setOpen] = React.useState<boolean>(false)
  const [task, setTask] = React.useState<TaskList[]>(JSON.parse(`${localStorage.getItem('taskList')}`))
  const [title, setTitle] = React.useState<string>('');
  const [priority, setPriority] = React.useState<string>('low')
  const [status, setStatus] = React.useState<string>('To do')

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
    // console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value)
  }

  const addTask = ():void => {
    if(title == "") {
      alert("Please enter task title")
    } else {
      const id = task.length > 0 ? task.length : 1;
      let newTask : TaskList = {id: '0' + (id+1), title: title, priority: priority, status: status, progress: 0};
      if(task.length > 0) {
        setTask([...task, newTask])
      } else {
        setTask([newTask]);
      }
      setOpen(false)
    }
  }

  const handlePriority = (value:string):void => {
    setPriority(value);
  }

  return (
    <Container maxWidth="md">
      <AddTask open={open} title={title} priority = {priority} handleOpen = {handleOpen} handleClose={handleClose} addTask={addTask} handleTaskValue={handleTaskValue} handlePriority={handlePriority}/>
      <TaskList taskList={task} />
    </Container>
  );
}

export default App;
