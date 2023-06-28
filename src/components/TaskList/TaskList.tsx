import { CardHeader, Container } from '@mui/material';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import './TaskList.css';
import Typography from '@mui/material/Typography';

export default function TaskList() {
  return (
    <div className="taskList">
      <Card className="taskCard">
        <div>
          <span>Title</span>
          <p>Go to gym</p>
        </div>
        <div>
          <span>Priority</span>
          <p>Medium</p>
        </div>
        <div>
          <span>Status</span>
          <p>To be done</p>
        </div>
        <div>
          <span>Actions</span>
          <p></p>
        </div>
      </Card>
    </div>
  );
}
