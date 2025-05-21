import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // pretend login success
    navigate('/');
  };

return (
  <>
    <Helmet>
      <title>Login</title>
    </Helmet>

    <Container className="mt-3" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email/Student Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email or student number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="no-radius"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="no-radius"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3 mb-3 no-radius">
          Login
        </Button>

        <div className="mb-3 text-center">
          <a href="#" onClick={(e) => { 
            e.preventDefault(); 
            alert("Not on this branch! Tune in for feature/forgotPassword :)"); 
          }}>
            I forgot my password
          </a>
        </div>
      </Form>
    </Container>
  </>
);
};

export default Login;
