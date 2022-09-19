import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

//component file
import TodoContainer from './components/TodoContainer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  // document.getElementById('root')
);
