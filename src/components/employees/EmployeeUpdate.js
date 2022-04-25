import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import employeeContext from "../../context/employee/employeeContext";
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message';

const EmployeeUpdate = (props) => {
    const EmployeeContext = useContext(employeeContext);

    const { loading } = EmployeeContext;

    const [show, setShow] = useState(props.show);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let employee = props.employee;

    const handleClose = () => {
        setShow(false);

    };

    useEffect(() => {

    }, []);

    const onSubmit = (query, e) => {
        EmployeeContext.updateEmployee({ id: employee.id, query })
        window.location.reload()
    }

    const onError = (err, e) => {
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit, onError)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} xs={6} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    defaultValue={employee?.name}
                                    {...register("name", { required: "Name is required" })}
                                />
                                <div style={{ 'color': 'red' }}>
                                    <ErrorMessage errors={errors} name="name" />
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} xs={6} controlId="formGridMobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="01012122122"
                                    defaultValue={employee?.mobile}
                                    {...register("mobile", { required: "mobile is required" })}
                                />
                                <div style={{ 'color': 'red' }}>
                                    <ErrorMessage errors={errors} name="mobile" />
                                </div>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EmployeeUpdate;
