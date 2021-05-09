import React from 'react';
import AddTask from './AddTask';

const Header = ({ onAdd, tasks }) => {
  return (
    <div>
      <h1 className='title'>Task Tracker</h1>
      <AddTask onAdd={onAdd} tasks={tasks} />
    </div>
  );
};

export default Header;
