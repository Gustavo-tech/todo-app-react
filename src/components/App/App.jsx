// React
import React, { Component } from 'react';

// Components
import Header from '../Header/Header';
import AddForm from '../AddForm/AddForm';
import TaskContainer from '../TaskContainer/TaskContainer';
import Task from '../Task/Task';

// Styles
import './style.css';

class App extends Component {
    
    state = {
        tasks: [
            { id: 1, name: 'Remove the trash' },
            { id: 2, name: 'Do the commit' },
            { id: 3, name: 'Do my homework' }
        ]
    }

    addTask = (task) => {

        if (task.name !== "") {
            task.id = this.state.tasks[this.state.tasks.length - 1].id + 1;
            let tasks = [...this.state.tasks, task];
            this.setState({
                tasks
            })
        }
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        })

        this.setState({
            tasks
        })
    }

    render() {
        return(
            <div className="app">
                <Header />
                <TaskContainer>
                    <Task tasks={this.state.tasks} deleteTask={this.deleteTask} />
                </TaskContainer>
                <AddForm addTask={this.addTask} />
            </div>
        )
    }
}

export default App;