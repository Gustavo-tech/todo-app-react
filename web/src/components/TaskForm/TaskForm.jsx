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
            let tasks = response.data;
            this.setState({
                tasks: tasks
            })

            this.setState({id: this.getLastId(tasks) + 1})
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

        task.priority = this.convertPriorityToString(task.priority);
        this.setState({
            tasks: [...this.state.tasks, task]
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
            priority: this.convertPriorityToNumber(this.state.priority)
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

    getLastId = (tasks) => {
        console.log(tasks);
        var maxId = 0;

        tasks.forEach(task => {
            if (task.id > maxId) {
                maxId = task.id;
            }
        })

        return maxId;
    }

    convertPriorityToNumber(priority) {
        switch (priority) {
            case "High":
                return 0;
            case "Medium":
                return 1;
            case "Low":
                return 2;
            default:
                return 2;
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
