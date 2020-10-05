// React
import React from 'react';

// Style
import './style.css';

// Images
import Done from '../../assets/icons/check.png';

const Todos = ({tasks, deleteTask}) => {

  const todoList = tasks.length ? 
  (
    tasks.map(task => {
      return (
        <h2 key={task.id}> {task.name} <button onClick={() => {deleteTask(task.id)}}> <img src={Done} alt="done"/> </button> </h2> 
      )
    })
  ) 
  
  : 
  
  (
    <p>Few free to create a new task!</p>
  );

  return (
    <div>
      {todoList}
    </div>
  )
}

export default Todos;