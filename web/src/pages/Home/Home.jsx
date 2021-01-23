// React
import React from "react";

// Components
import TaskForm from '../../components/TaskForm/TaskForm';

// Images
import TodoImage from '../../assets/to-do.svg';

// CSS
import './style.css';

const Home = () =>  {
    return(
        <div>
            <img className="to-do-icon" src={TodoImage} alt="to-do-icon"/>
            <TaskForm />
        </div>
    )
}

export default Home;
