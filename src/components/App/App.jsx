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

    showState = () => {
        console.log(this.state.tasks);
    }

    render() {
        return(
            <div>
                <Header/>
                <Task tasks={this.state.tasks}/>
                <AddForm/>
                <button onClick={this.showState}>Click me</button>
            </div>
        )
    }
}

export default App;