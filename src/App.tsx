import Button from '@mui/material/Button';
import React, { useState }  from 'react';
import './App.css';
import PersistentDrawerLeft from './components/drawer/Drawer';
import TodoCard from './components/todos/TodoCard';
import TodoDialog from './components/todos/TodoDialog';



function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PersistentDrawerLeft />
    </div>

  );
}

export default App;
