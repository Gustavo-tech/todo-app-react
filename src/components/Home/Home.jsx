// Components
import React, { Component } from "react";
import TaskTable from '../TaskTable/TaskTable';
import TaskForm from '../TaskForm/TaskForm';

// Images
import TodoImage from '../../assets/to-do.svg';

// CSS
import './style.css';

class Home extends Component {
    state = {
        tasks: [
            { name: "Commit my changes", priority: "High" },
            { name: "Create a nice back end", priority: "Medium" },
            { name: "Create a beautiful front end", priority: "Low" },
        ]
    }

    handleNewTask = (task) => {
        
    }

    render() {
        return(
            <div>
                <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
                <TaskForm />
                <TaskTable tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Home;
