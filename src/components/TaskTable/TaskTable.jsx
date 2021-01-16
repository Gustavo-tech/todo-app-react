// React
import React from 'react';

// Components
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// Styles
import './style.css';

const TaskTable = ({tasks}) => {
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
                    
                </tbody>
            </Table>
        </Container>
    )
}

export default TaskTable;
