import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Tasks from './components/Tasks';
import Header from './components/Header';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'task 1',
      text: 'here is text',
      day: 'Feb 5th @ 1pm',
      reminder: false,
    },
    {
      id: 2,
      title: 'task 2',
      text: 'here is text',
      day: 'Feb 5th @ 1pm',
      reminder: true,
    },
    {
      id: 3,
      title: 'task 3',
      text: 'here is text',
      day: 'Feb 5th @ 1pm',
      reminder: false,
    },
    {
      id: 4,
      title: 'task 4',
      text: 'here is text',
      day: 'Feb 5th @ 1pm',
      reminder: false,
    },
  ]);

  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className='App'>
      <div className='main-content'>
        <Header tasks={tasks} onAdd={addTask} showAddTask={showAddTask} />
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
          <Buttons
            btn1={showAddTask ? 'Close' : 'New Task'}
            toggleAddTask={toggleAddTask}
            showAddTask={showAddTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
