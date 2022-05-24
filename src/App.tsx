import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';



function App() {
  const [getter, setter] = useState(0)
  
  return (
    <div>
      <TodoList />
      <h1>{getter}</h1>
      <button onClick={() => setter(getter+1)}>moumate 1 it</button>
    </div>

  );
}

export default App;
