import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'task 1',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      urgent: true,
    },
    {
      id: 2,
      title: 'task 2',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      urgent: true,
    },
    {
      id: 3,
      title: 'task 2',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      urgent: true,
    },
    {
      id: 4,
      title: 'task 2',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      urgent: true,
    },
  ]);

  return (
    <div className='App'>
      <div className='main-content'>
        <h1 className='title'>Task Tracker</h1>
        <div className='task-content'>
          <div className='tasks-box'>
            <Tasks tasks={tasks} />
          </div>
          <Buttons btn1='Add' btn2='Delete' />
        </div>
      </div>
    </div>
  );
}

export default App;
