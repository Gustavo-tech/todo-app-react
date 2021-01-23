// React
import React from 'react';

// Components
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// Styles
import './style.css';

function setEditProperties(task) {
    document.getElementById('task-name').value = task.taskName;
    document.getElementById('priority').value = task.priority;
    document.getElementById('submit-button').innerHTML = 'Edit';
}

const TaskTable = ({tasks, handleDeleteTask}) => {
    return(
        <Container>
                <Table striped bordered hover variant="dark" className="to-do-table">
                <thead className="table-head">
                    <tr>
                        <th>Id</th>
                        <th>Task name</th>
                        <th>Priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => {
                            return(
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.taskName}</td>
                                    <td>{task.priority}</td>
                                    <td><span onClick={() => handleDeleteTask(task)} className="link-actions">Delete</span> | <span onClick={() => setEditProperties(task)} className="link-actions">Edit</span></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default TaskTable;
