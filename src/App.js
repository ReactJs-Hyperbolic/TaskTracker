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
      reminder: false,
    },
    {
      id: 2,
      title: 'task 2',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      reminder: true,
    },
    {
      id: 3,
      title: 'task 3',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      reminder: false,
    },
    {
      id: 4,
      title: 'task 4',
      text: 'here is text',
      date: 'Feb 5th @ 1pm',
      reminder: false,
    },
  ]);

  const delTask = id => {
    setTasks(tasks.filter(task => task.id != id));
  };

  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='App'>
      <div className='main-content'>
        <h1 className='title'>Task Tracker</h1>
        <div className='task-content'>
          <div className='tasks-box'>
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={delTask}
                onToggle={toggleReminder}
              />
            ) : (
              'No tasks to show'
            )}
          </div>
          <Buttons btn1='Add' btn2='Delete' />
        </div>
      </div>
    </div>
  );
}

export default App;
