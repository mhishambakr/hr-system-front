import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup } from 'react-bootstrap'
import EmployeeUpdate from './EmployeeUpdate';

const EmployeeItem = ({ employee }) => {
    let [showUpdate, setShowUpdate] = useState(false);
    const editEmployee = () => {
    
        setShowUpdate(true)
    }
    return (
        <>
            <EmployeeUpdate
                show={showUpdate}
                employee={employee}
                key={showUpdate}
                closeUpdateModal={() => {
                    setShowUpdate(false);
                }}
            ></EmployeeUpdate>
            <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.group}</td>
                <td>{employee.mobile}</td>
                <td>
                    <ButtonGroup size="sm">
                        <Button variant="light" onClick={() => editEmployee(employee.id)}>

                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        </>
    )
}

export default EmployeeItem