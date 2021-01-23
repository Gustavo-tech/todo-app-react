// React
import React, { Component } from "react";

// axios
import axios from 'axios';

// Components
import TaskTable from '../../components/TaskTable/TaskTable';
import TaskForm from '../../components/TaskForm/TaskForm';

// Images
import TodoImage from '../../assets/to-do.svg';

// CSS
import './style.css';

class Home extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/todo/todos')
        .then(response => {
            if (response.status === 200) {
                this.setState({
                    tasks: response.data
                })
            }
            else
            {
                alert(response.data);
            }
        })
    }

    handleNewTask = (task) => {
        axios.post('https://localhost:5001/api/todo/add', JSON.stringify(task), {
            data: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST'
        })
        .catch(error => {
            console.log(error);
        })

        task.priority = this.convertPriorityToString(task.priority);
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    handleEdit = (task) => {
        axios.put('https://localhost:5001/api/todo/edit', JSON.stringify(task), {
            data: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PUT',
        })
    }

    handleDelete = (taskReceived) => {
        let tasks = this.state.tasks.filter(task => {
            return task !== taskReceived;
        })

        axios.delete('https://localhost:5001/api/todo/delete', {
            data: JSON.stringify(taskReceived),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            if (response.status === 200) {
                this.setState({
                    tasks: tasks
                })
            }
        })
        .catch(error => {
            alert(error);
        })
    }

    convertPriorityToString(priority) {
        switch (priority) {
            case 0:
                return "High";
            case 1:
                return "Medium";
            case 2:
                return "Low";
            default:
                return "Low";
        }
    }

    render() {
        return(
            <div>
                <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
                <TaskForm tasks={this.state.tasks} handleNewTask={this.handleNewTask} handleEditTask={this.handleEdit}/>
                <TaskTable handleDeleteTask={this.handleDelete} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default Home;
