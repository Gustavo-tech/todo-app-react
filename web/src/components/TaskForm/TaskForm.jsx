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
        name: '',
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
            name: this.state.name,
            priority: this.state.priority,
        }

        this.props.handleNewTask(newTask);
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
                                <option value="2">Low</option>
                                <option value="1">Medium</option>
                                <option value="0">High</option>
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
