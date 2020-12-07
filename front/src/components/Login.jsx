import React from 'react';
import { Container, Form, Button, Jumbotron } from 'react-bootstrap'

const Login = ({ onSubmit, emailChangeHandler, passChangeHandler }) => {

  return (
    <Jumbotron>
      <Container style={{}}>
        <h1>Access to your Favorites Movies!</h1>
        <Form onSubmit={onSubmit}>
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

          <Button variant="primary" type="submit">
            Log in
        </Button>
        </Form>
      </Container>
    </Jumbotron>

  )
}

export default Login

