// React
import React from 'react';

// Style
import './style.css';

const  TaskContainer = ({children}) => {
    return(
        <div className="task-container">
            {children}
        </div>
    )
}

export default TaskContainer;