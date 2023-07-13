import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";

import './DeleteTask.css';

import { obj } from "../../App";

type Props = {
    dialogObj : obj;
    handleCloseConfirmDialog : () => void;
    deleteTask:(id:number)=> void;
}

const DeleteTask : React.FC<Props> = ({dialogObj, handleCloseConfirmDialog, deleteTask}) => {
    return (
        <div>
            <Dialog open={dialogObj.open} onClose={handleCloseConfirmDialog} fullWidth>
                <DialogContent>
                    <DialogContentText align="center">Are you sure you want to delete this task?</DialogContentText>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" size="small" onClick={() => deleteTask(dialogObj.id)}>Delete</Button>
                    <Button size="small" variant="outlined" onClick={handleCloseConfirmDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DeleteTask;