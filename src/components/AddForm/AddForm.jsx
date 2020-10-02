// React
import React, { Component } from 'react';

// Style
import './style.css';

class AddForm extends Component {

    state = {
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            name: ''
        });
    }

    render() {
        return(
            <div className="container">
                <label className="">Insert New Task</label>
                <form onSubmit={this.handleSubmit}>

                    <input type="text" className="task-input" placeholder="Insert A New Task Here" 
                    onChange={this.handleChange} value={this.state.content} />
                    
                    <button>ADD</button>
                </form>
            </div>
            
        )
    }
}

export default AddForm;