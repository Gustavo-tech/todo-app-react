// React
import React from 'react';

// Style
import './style.css';

const Todos = ({tasks, deleteTask}) => {

  const todoList = tasks.length ? (
    tasks.map(task => {
      return (
        <div className="task-info" key={task.id}>
          <h2 onClick={() => {deleteTask(task.id)}}> {task.name} </h2>
        </div>
      )
    })
  ) : (
    <p>You have no task left, yay!</p>
  );

  return (
    <div>
      {todoList}
    </div>
  )
}

export default Todos;
// const Task = ({tasks, deleteTask}) => {
//     const list = tasks.lenght ? 
//     (
//         tasks.map(task => {
//             return (
//                 <div className="task-info" key={task.id}>
//                     <h2 onClick={() => {deleteTask(task.id)}}>{task.name}</h2>
//                 </div>
//             )
//         })
//     ) 
    
//     : 
    
//     (
//         <p>You have no more tasks!</p>
//     )

//     return(
//         <div>
//             {list}
//         </div>
//     )
// }

// export default Task;