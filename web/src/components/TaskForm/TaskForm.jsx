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

class TaskForm extends Component {
    state = {
        id: 0,
        taskName: '',
        priority: 'low'
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onPriorityChange = (event) => {
        this.setState({
            priority: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var newTask = {
            id: this.getLastId(this.props.tasks),
            taskName: this.state.name,
            priority: this.convertPriorityToNumber(this.state.priority)
        }

        this.props.handleNewTask(newTask);
    }

    getLastId(tasks) {
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

    render() {
        return (
            <Container style={{marginBottom: '2%'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col sm={3} lg={8}>
                            <Form.Group>
                                <Form.Control onChange={this.onNameChange} id="task-name" type="text" placeholder="Enter a new task" required />
                            </Form.Group>
                        </Col>
                        <Col sm={3} lg={3}>
                            <Form.Control
                                onChange={this.onPriorityChange}
                                as="select"
                                className="mr-sm-2"
                                id="priority"
                                custom 
                                required >
                                <option>Please enter with a priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </Form.Control>
                        </Col>
                        <Col sm={2} lg={1}>
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default TaskForm;
