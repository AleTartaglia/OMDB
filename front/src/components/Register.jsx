import React from 'react';
import { Container, Form, Button, Jumbotron } from 'react-bootstrap'

const Register = ({ onSubmit, nameChangeHandler, emailChangeHandler, passChangeHandler }) => {

  return (
    <Jumbotron>
      <Container>
        <h1>Register Now!</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={nameChangeHandler} type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={emailChangeHandler} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={passChangeHandler} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary outline-light" type="submit">
            Sign up
        </Button>
        </Form>
      </Container>
    </Jumbotron>

  )
}

export default Register

