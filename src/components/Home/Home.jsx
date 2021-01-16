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
        tasks: []
    }

    render() {
        return(
            <div>
                <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
                <TaskForm/>
                <TaskTable />
            </div>
        )
    }
}

export default Home;
