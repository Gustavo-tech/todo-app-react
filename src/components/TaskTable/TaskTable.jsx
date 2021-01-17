// React
import React from 'react';

// Components
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// Styles
import './style.css';

const TaskTable = ({tasks, handleDeleteTask, handleEdit}) => {
    return(
        <Container>
                <Table striped bordered hover variant="dark">
                <thead className="table-head">
                    <tr>
                        <th>
                            Task name
                        </th>
                        <th>
                            Priority
                        </th>
                        <th>
                            actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => {
                            return(
                                <tr key={task.id}>
                                    <td>{task.name}</td>
                                    <td>{task.priority}</td>
                                    <td><span onClick={() => handleDeleteTask(task.id)} className="link-actions">Delete</span> | <span className="link-actions" onClick={() => handleEdit(task.id)}>Edit</span></td>
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
