import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
    alert('Please fill in both email/student number and password.');
    return;
  }
    onLogin(); // pretend login success
    navigate('/');
  };

return (
  <>
    <Helmet>
      <title>Login</title>
    </Helmet>

    <Container className="mt-3" style={{ maxWidth: 400 }}>
      <h2 className="mb-4 text-center iscte-blue-text">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label className="iscte-blue-text fw-light">Email/Student Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter email or student number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className="form-style"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="iscte-blue-text fw-light">Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="form-style"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-2 mb-3 button-style">
          Login
        </Button>
        <div className="text-center">
          <Link to="/forgot-password" className="iscte-bluer-text fw-light">
            I forgot my password
          </Link>
        </div>
      </Form>
    </Container>
  </>
);
};

export default Login;
