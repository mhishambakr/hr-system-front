import React, { useContext, useEffect } from 'react'
import attendanceContext from '../../context/attendance/attendanceContext'
import { Table, ToggleButton } from 'react-bootstrap'

const Attendance = () => {
    const AttendanceContext = useContext(attendanceContext)
    let { attendance, loading } = AttendanceContext
    useEffect(() => {
        AttendanceContext.getAttendance()
    }, [])
    if (loading) {
        return <p>Loading</p>
    } else {
        return (
            <>
                {attendance.map(day => (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Attendance</th>
                            </tr>

                        </thead>
                        <tbody>
                            {day.employees.map(employeeAttendance => (
                                <tr>
                                    <td>{employeeAttendance.id}</td>
                                    <td>{employeeAttendance.Employee.name}</td>
                                    <td>
                                        <ToggleButton
                                            className="mb-2"
                                            id="toggle-check"
                                            type="checkbox"
                                            variant="outline-primary"
                                            checked={employeeAttendance.isPresent}
                                            value={employeeAttendance.isPresent}
                                            onClick={(e) => employeeAttendance.isPresent = !employeeAttendance.isPresent}
                                        >
                                            {employeeAttendance.isPresent}
                                        </ToggleButton>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                ))}
            </>
        )
    }
}

export default Attendance