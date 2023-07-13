
import * as React from 'react';
import Button from '@mui/material/Button'
import { ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import './AddTask.css'
import { addEditDialogObj } from '../../App';

type taskProps = {
    title: string;
    status: string;
    priority: string;
    addEditDialogObj : addEditDialogObj;
    handleOpen: (flag: string, id?: number) => void;
    handleClose: () => void;
    handlePriority: (value:string) => void;
    handleTitle: (e:React.ChangeEvent<HTMLInputElement>) => void;
    addTask: ()=> void;
    editTask: (id:number) => void;
    handleStatus: (e:SelectChangeEvent)=> void;
}

const AddTask : React.FC<taskProps> = ({ title, status, addEditDialogObj, editTask, priority, handleOpen, handleClose, addTask, handleTitle, handleStatus, handlePriority}) => {

    return (
        <div className="header">
            <h1>Task list</h1>
            <Button size="small" variant="contained" onClick={() => handleOpen('add')}>
                + Add task
            </Button>
            <Dialog open={addEditDialogObj.open} onClose={handleClose} fullWidth>
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent>
                    <TextField margin='dense' size='small' placeholder='Enter task' type='text' value={title} onChange={handleTitle} fullWidth></TextField>
                    <FormControl sx={{mt: 1, minWidth: 120}} size="small">
                        <InputLabel id="select-label">Status</InputLabel>
                        <Select label="Status" labelId='select-label' value={status} onChange={handleStatus}>
                            <MenuItem value='To do'>To do</MenuItem>
                            <MenuItem value='In progress'>In progress</MenuItem>
                            <MenuItem value='Done'>Done</MenuItem>
                        </Select>
                    </FormControl>
                    <DialogContentText paddingTop={'15px'}>Priority</DialogContentText>
                    <Button onClick={() => handlePriority('High')} className='high'>High</Button>
                    <Button onClick={() => handlePriority('Medium')} className='medium'>Medium</Button>
                    <Button onClick={() => handlePriority('Low')} className='low'>Low</Button>
                </DialogContent>
                <DialogActions>
                    {addEditDialogObj.flag === "add" ? 
                    <Button size="small" variant='contained' onClick={addTask}>Add</Button> : 
                    <Button size="small" variant='contained' onClick={() => editTask(addEditDialogObj.id)}>Edit</Button>}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddTask;