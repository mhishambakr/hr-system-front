import React, { useContext } from 'react'
import { Form, Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import authContext from '../../context/auth/authContext'

const Login = () => {

  const AuthContext = useContext(authContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (user, e) => {
    console.log(user);
    AuthContext.login(user)

  }

  const onError = (err, e) => {
  }
  return (
    <Form className="mt-5 loginForm" onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group as={Row} md={12} className="justify-content-md-center mt-5 mb-3" controlId="formHorizontalUsername">
        <Form.Label as={Col} sm={2}>Username</Form.Label>
        <Col sm={10}>
          <Form.Control type="username" placeholder="Enter username"
            {...register("username")}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} md={12} className="mb-3 justify-content-md-center" controlId="formHorizontalPassword">
        <Form.Label as={Col} sm={2}>Password</Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password"
            {...register("password")}
          />
        </Col>
      </Form.Group>
      <ButtonGroup as={Col} md={12} sm={12}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </ButtonGroup>
    </Form>
  )
}

export default Login