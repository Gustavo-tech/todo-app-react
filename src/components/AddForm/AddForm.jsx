// React
import React, { Component } from 'react';

// Style
import './style.css';

class AddForm extends Component {

    state = {
        content: ''
    }

    render() {
        return(
            <div className="container">
                <label className="">Insert New Task</label>
                <form>
                    <input type="text" className="task-input" placeholder="Insert A New Task Here"/>
                    <button>ADD</button>
                </form>
            </div>
            
        )
    }
}

export default AddForm;