// React
import React, { Component } from 'react';

// Components
import Header from '../Header/Header';
import AddForm from '../AddForm/AddForm';
import Task from '../Task/Task';

class App extends Component {
    
    state = {
        tasks: [
            { id: 1, name: 'Remove the trash' },
            { id: 2, name: 'Do the commit' },
            { id: 3, name: 'Do my homework' }
        ]
    }

    addTask = (task) => {
        task.id = Math.random();
        let tasks = [...this.state.tasks, task];
        this.setState({
            tasks
        })
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
            <div>
                <Header />
                <Task tasks={this.state.tasks} deleteTask={this.deleteTask} />
                <AddForm addTask={this.addTask} />
            </div>
        )
    }
}

export default App;