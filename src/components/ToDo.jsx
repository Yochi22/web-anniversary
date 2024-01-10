import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import '../styles/Todo.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 4;

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://apitodoamor.onrender.com/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      await axios.post('https://apitodoamor.onrender.com/tasks', { title: newTask, completed: false });
      fetchTasks();
      setNewTask('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      await axios.put(`https://apitodoamor.onrender.com/tasks/${taskId}`, { completed: true });
      fetchTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`https://apitodoamor.onrender.com/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const renderTasks = currentTasks.map((task) => (
    <li key={task._id} className='list-group-item'>
      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-buttons">
          {!task.completed && (
            <button className='btn btn-success btn-sm' onClick={() => handleCompleteTask(task._id)}>
              Hecho
            </button>
          )}
          <button className='btn btn-danger btn-sm' onClick={() => handleDeleteTask(task._id)}>
            Eliminar
          </button>
        </div>
      </div>
    </li>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tasks.length / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NavbarComponent />
      <div className='principal'>
        <div className='grid-container'>
          <div className='todo-container'>
            <div className='column'>
              <h4 className='texto-todo'>Aquí podemos tener una lista de todas las cosas que queremos hacer juntas e ir marcando como completadas las que hayamos hecho</h4>
              <h2>Planes</h2>
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control small-placeholder'
                  placeholder='¿Qué quieres hacer?'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button className='btn btn-primary mt-2' onClick={handleCreateTask}>
                  Crear
                </button>
              </div>
              <ul className='list-group'>
                {renderTasks}
              </ul>
              <nav>
                <ul className='pagination'>
                  {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                      <button className='page-link' onClick={() => setCurrentPage(number)}>
                        {number}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
