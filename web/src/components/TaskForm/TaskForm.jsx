// React
import React, { Component } from 'react';

// Style
import './style.css';

// Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TaskTable from '../TaskTable/TaskTable';

// axios
import axios from 'axios';

// Utilities
import { getLastId } from '../../utilities/idFunctions';
import { filterTasks } from '../../utilities/tasksFilter';
import { convertPriorityToNumber, convertPriorityToString } from '../../utilities/prioritiesConverter';

class TaskForm extends Component {
    state = {
        tasks: [],
        id: 0,
        taskName: '',
        priority: 'Low',
        action: 'Add'
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/todo/todos')
        .then(response => {
            this.setState({
                tasks: response.data
            })

            this.setState({id: getLastId(response.data) + 1})
        })
    }

    insertNewTask = (task) => {
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

        task.priority = convertPriorityToString(task.priority);
        const updatedTasks = [...this.state.tasks, task];
        filterTasks(updatedTasks);

        this.setState({
            tasks: updatedTasks
        })
    }

    editTask = (task) => {
        axios.put('https://localhost:5001/api/todo/edit', JSON.stringify(task), {
            data: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json'
            },
            method: 'PUT'
        })

        let updatedTasks = this.state.tasks;

        updatedTasks.forEach(taskInState => {
            if (taskInState.id ===  task.id) {
                taskInState.taskName = task.taskName;
                taskInState.priority = convertPriorityToString(task.priority);
            }
        })

        this.setState({
            tasks: updatedTasks
        })
    }

    deleteTask = (taskReceived) => {
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

    onNameChange = (event) => {
        this.setState({taskName: event.target.value});
    }

    onPriorityChange = (event) => {
        this.setState({priority: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        var newTask = {
            id: this.state.id,
            taskName: this.state.taskName,
            priority: convertPriorityToNumber(this.state.priority)
        }

        this.setState({
            id: this.state.id + 1,
            taskName: '',
            priority: 'low'
        })

        if (this.state.action === 'Add') {
            this.insertNewTask(newTask);
        }
        else {
            this.editTask(newTask);
            this.setState({
                action: 'Add'
            })
        }
        
    }

    setEditProps = (task) => {
        this.setState({
            id: task.id,
            taskName: task.taskName,
            priority: task.priority,
            action: 'Edit'
        })
    }

    render() {
        return (
            <div>
                <Container style={{marginBottom: '2%'}}>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                        <Col sm={3} lg={1}>
                                <Form.Group>
                                    <Form.Control id="task-id" type="number" value={this.state.id} disabled />
                                </Form.Group>
                            </Col>
                            <Col sm={3} lg={8}>
                                <Form.Group>
                                    <Form.Control value={this.state.taskName} onChange={this.onNameChange} id="task-name" type="text" placeholder="Enter a new task" required />
                                </Form.Group>
                            </Col>
                            <Col sm={3} lg={2}>
                                <Form.Control
                                    value={this.state.priority}
                                    onChange={this.onPriorityChange}
                                    as="select"
                                    className="mr-sm-2"
                                    id="priority"
                                    custom 
                                    required>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </Form.Control>
                            </Col>
                            <Col sm={2} lg={1}>
                                <Button id="submit-button" type="submit">{this.state.action}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <TaskTable handleEditTask={this.setEditProps} handleDeleteTask={this.deleteTask} tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default TaskForm;
