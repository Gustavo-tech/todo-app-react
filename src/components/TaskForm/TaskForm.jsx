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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class TaskForm extends Component {
    state = {
        task: {
            name: '',
            priority: ''
        }
    }

    handleChange = () => {

    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <Container style={{marginBottom: '2%'}}>
                <Form>
                    <Row>
                        <Col lg={8}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter a new task" />
                            </Form.Group>
                        </Col>
                        <Col lg={2}>
                            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                <Dropdown.Item href="#/action-1">Low</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">High</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col lg={2}>
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default TaskForm;
