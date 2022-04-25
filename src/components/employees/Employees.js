import React, { useContext, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import EmployeeItem from './EmployeeItem'
import employeeContext from '../../context/employee/employeeContext'
const Users = () => {
    const EmployeeContext = useContext(employeeContext)
    let { employees, loading } = EmployeeContext
    useEffect(() => {
        EmployeeContext.getEmployees()
    }, [])
    if (loading) {
        return <p>Loading</p>
    } else {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {employees.map(employee => (

                        <EmployeeItem employee={employee} key={employee.id} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default Users