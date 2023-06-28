import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';

import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>Task list</h1>
      <div>
        <Button size="small" variant="contained">
          + Add task
        </Button>
      </div>
    </div>
  );
}
