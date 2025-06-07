import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import LoginHeader from '../components/LoginHeader.jsx';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email.trim()) {
    alert('Please enter your email or student number.');
    return;
  }

    setSubmitted(true);
    // Simulate delay then redirect back to login
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <LoginHeader />

      <Container className="mt-3" style={{ maxWidth: 400 }}>
        <h2 className="mb-4 text-center iscte-blue-text">I forgot my password</h2>

        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="iscte-blue-text fw-light">
                Email/Student Number
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or student number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-style"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-2 mb-3 button-style">
              Recover
            </Button>

            <div className="text-center">
                <Link to="/login" className="iscte-bluer-text fw-light">
                    Login
                </Link>
            </div>
          </Form>
        ) : (
          <div className="text-center iscte-blue-text mt-4">
            If your account exists, a reset link has been sent.
          </div>
        )}
      </Container>
    </>
  );
};

export default ForgotPassword;
