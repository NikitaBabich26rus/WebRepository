import React, {useState, useContext} from 'react'
import TodoList from './TodoList'
import {Context} from './Context'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [taskInput, setTasksInput] = useState('');

  const addTask = (event) => {
    if (event.key === 'Enter') {
      setTasks([
        ...tasks,
        { 
          id: Date.now(),
          title: taskInput,
          completed: false
        }
      ])
      setTasksInput('');
    }
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id){
        task.completed = !task.completed
      }
      return task
    }))
  }

  return (
    <Context.Provider value={{
      removeTask, toggleTask
    }}>
      <div className="container">
        <h1>Todo list</h1>
          <div>
            <input
              className="input"
              type="text"
              value ={taskInput}
              onChange={event => setTasksInput(event.target.value)}
              onKeyPress={addTask}
            />
          </div>

          <TodoList tasks={tasks} />
      </div>
    </Context.Provider>
  );
} 