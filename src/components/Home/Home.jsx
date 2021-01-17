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
        task.id = this.state.tasks.length + 1;
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    handleDelete = (id) => {
        let tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        })

        this.setState({
            tasks: tasks
        })
    }

    handleEdit = (id) => {
        let task = this.state.tasks.find(task => {
            return task.id === id;
        });
        document.getElementById('task-name').value = task.name;
        document.getElementById('priority').value = task.priority;
    }

    render() {
        return(
            <div>
                <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
                <TaskForm handleNewTask={this.handleNewTask}/>
                <TaskTable handleEdit={this.handleEdit} handleDeleteTask={this.handleDelete} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Home;
