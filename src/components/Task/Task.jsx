// React
import React from 'react';

// Style
import './style.css';

const Task = ({tasks}) => {
    const list = tasks.lenght ? 
    (
        tasks.map(task => {
            return (
                <div className="task-info" key={task.id}>
                    <h2>{task.name}<button>Done</button></h2>
                </div>
            )
        })
    ) 
    
    : 
    
    (
        <p>You have no more tasks!</p>
    )

    return(
        <div>
            {list}
        </div>
    )
}

export default Task;