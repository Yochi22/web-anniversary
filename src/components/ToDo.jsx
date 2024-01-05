import React from 'react'
import { useState, useEffect } from 'react';
import { NavbarComponent} from './NavbarComponent'
import '../styles/Todo.css';
import axios from 'axios'
function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks'); 
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleCreateTask = async () => {
    try {
      await axios.post('http://localhost:5000/tasks', { title: newTask, completed: false });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, { completed: true });
      fetchTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
    <NavbarComponent />
    <div className='principal'>
  <div className='grid-container'>
        <div className='todo-container'>
          <div className='column'>
          <h4 className='texto-todo'>Aquí podemos tener una lista de todas las cosas que queremos hacer juntas e ir marcando como completada las que ya hayamos hecho</h4>
            <h2>Planes para hacer juntas</h2>
            <div className='mb-3'>
              <input
                type='text'
                className='form-control small-placeholder'
                placeholder='¿Qué quieres hacer?'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button className='btn btn-primary mt-2' onClick={handleCreateTask}>
                Crear
              </button>
            </div>

            <ul className='list-group'>
              {tasks.map((task) => (
                <li key={task._id} className='list-group-item d-flex justify-content-between align-items-center'>
                  {task.title}
                  <div>
                    {!task.completed && (
                      <button className='btn btn-success btn-sm mx-1' onClick={() => handleCompleteTask(task._id)}>
                        Completar
                      </button>
                    )}
                    <button className='btn btn-danger btn-sm' onClick={() => handleDeleteTask(task._id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ToDo