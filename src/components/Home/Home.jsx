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
            { id: 1, name: "Commit my changes", priority: "High" },
            { id: 2, name: "Create a nice back end", priority: "Medium" },
            { id: 3, name: "Create a beautiful front end", priority: "Low" },
        ]
    }

    handleNewTask = (task) => {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        return(
            <div>
                <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
                <TaskForm handleNewTask={this.handleNewTask}/>
                <TaskTable tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Home;
