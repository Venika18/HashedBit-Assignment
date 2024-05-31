import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ToDoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()].sort());
      setNewTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div className="todo-container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <TransitionGroup className="task-list">
        {tasks.map((task, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="task-item"
          >
            <li className="task-item">
              {task}
              <button onClick={() => handleDeleteTask(task)} className="delete-button">Delete</button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TodoList;
