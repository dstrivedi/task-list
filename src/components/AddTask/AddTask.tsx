
import * as React from 'react';
import Button from '@mui/material/Button'
import { ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import './AddTask.css'

type taskProps = {
    title: string;
    priority: string;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    handlePriority: (value:string) => void;
    handleTaskValue: (e:React.ChangeEvent<HTMLInputElement>) => void;
    addTask: ()=> void;
}

const AddTask : React.FC<taskProps> = ({ title, open, priority, handleOpen, handleClose, addTask, handleTaskValue, handlePriority}) => {

    return (
        <div className="header">
            <h1>Task list</h1>
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