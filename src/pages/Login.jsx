import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container, Form, Button, InputGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import LoginHeader from "../components/LoginHeader.jsx";

const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMessage("");
  if (!email.trim() || !password.trim()) {
    setErrorMessage("Please fill in both email/student number and password.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      credentials: "include", // Ensure cookies are sent/received
      body: JSON.stringify({email, password}),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.message || "Login failed");
      console.log("Server response:", data);
      return;
    }

    localStorage.setItem("token", data.token); // Keep for other uses
    onLogin && onLogin(data.user);
    navigate("/");
  } catch (err) {
    setErrorMessage("Error connecting to server");
    console.error("Network error:", err);
  }
};

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <LoginHeader />

      <Container className="mt-3" style={{maxWidth: 400}}>
        <h2 className="mb-4 text-center iscte-blue-text">Login</h2>
        <Form onSubmit={handleLogin}>
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

          <Form.Group className="mb-3">
            <Form.Label className="iscte-blue-text fw-light">
              Password
            </Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-style"
              />
              <InputGroup.Text
                onClick={() => setShowPassword(!showPassword)}
                className="form-style">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>

          {errorMessage && (
            <div className="text-danger mb-3" style={{fontSize: "0.95rem"}}>
              {errorMessage}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-2 mb-3 button-style">
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
