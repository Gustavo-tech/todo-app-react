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
        ]
    }

    validateTask(task) {
        if ((task.name) !== "" && (this.state.tasks.length <= 7)) {
            return true;
        }

        else {
            return false;
        }
    }

    addTask = (task) => {

        const valid = this.validateTask(task);

        if (valid == true) {
            if (this.state.tasks.length == 0) {
                task.id = 1;
                let tasks = [task];
                this.setState({
                    tasks
                })
            }

            else {
                task.id = this.state.tasks[this.state.tasks.length - 1].id + 1;
                let tasks = [...this.state.tasks, task];
                this.setState({
                    tasks
                })
            }
        }
        
    }

    deleteTask = (id) => {
        const tasks = this.state.tasks.filter(task => {
            return task.id !== id;
        })

        this.setState({
            tasks
        })
    };

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