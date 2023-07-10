
import * as React from 'react';
import Button from '@mui/material/Button'
import { ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

import { taskProps } from '../../App';

type TaskList = {
    id: string;
    title: string;
    priority: string;
    status: string;
    progress: number;
}

const AddTask : React.FC<taskProps> = ({taskList}) => {
    const [open, setOpen] = React.useState(false)
    const [task, setTask] = React.useState<TaskList[]>(taskList)
    const [title, setTitle] = React.useState('');
    const [priority, setPriority] = React.useState('')
    const id = taskList.length - 1;

    React.useEffect(() => {
        // console.log(taskList)
        localStorage.setItem('taskList', JSON.stringify(taskList))
    },[taskList])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleTaskValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.value);
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        let newTask : TaskList = {id: '0' + (id+1), title: title, priority: priority, status: 'To Do', progress: 0};
        setTask([...task , newTask]);
        console.log(task, newTask)
    }

    const handlePriority = (value:string) => {
        setPriority(value);
    }
    return (
        <div>
            <Button size="small" variant="contained" onClick={handleOpen}>
                + Add task
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent>
                    <TextField margin='dense' placeholder='Enter task' type='text' value={title} onChange={handleTaskValue} autoFocus fullWidth></TextField>
                    <DialogContentText paddingTop={'15px'}>Priority</DialogContentText>
                    <ButtonGroup aria-label="text button group">
                        <Button onClick={() => handlePriority('high')}>High</Button>
                        <Button onClick={() => handlePriority('medium')}>Medium</Button>
                        <Button onClick={() => handlePriority('low')}>Low</Button>
                    </ButtonGroup>
                </DialogContent>
                <DialogActions>
                    <Button size="small" variant='contained' onClick={addTask}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTask;