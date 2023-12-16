import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import '../../styles/signup_login_styles.css';
import background from '../../assets/background.jpg';

const Login = () => {
  useEffect(() => {
    // Apply styles to the body when the component mounts
    document.body.style.height = '100vh';
    document.body.style.backgroundImage = `url(${background})`;  // Fix here
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    // Optionally, you can uncomment the backdrop filter styles if needed
    // document.body.style.webkitBackdropFilter = 'blur(8px)';
    // document.body.style.backdropFilter = 'blur(8px)';

    // Create a style element for ::before styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, rgba(0, 0, 255, 0.37), rgba(255, 0, 0, 0.22));
        z-index: -2;
      }
    `;

    // Append the style element to the head
    document.head.appendChild(styleElement);

    // Optionally, you can return a cleanup function to remove the styles when the component unmounts
    return () => {
      document.body.style.height = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundSize = '';
      document.body.style.display = '';
      document.body.style.flexDirection = '';
      document.body.style.alignItems = '';
      document.body.style.justifyContent = '';
      // Reset backdrop filter styles if needed
      // document.body.style.webkitBackdropFilter = '';
      // document.body.style.backdropFilter = '';
      // Remove the ::before style element
      document.head.removeChild(styleElement);
    };
  }, []);
  return (
    <Container>
      <header>
        <a className="techbook-logo" href="home.html" aria-label="Tech-Book">
          <img src={Logo} alt="Tech-Book Logo" />
        </a>
      </header>
      <main>
        <Row className="px-3">
          <Col lg={10} xl={9} className="card flex-row mx-auto px-0">
            <div className="img-left-log_in d-none d-md-flex"></div>
            <Card.Body>
              <div className="logo-img mt-3">
                <img src={Logo} alt="Logo" />
              </div>
              <h2 className="title mt-1" style={{ color: 'blue' }}>
                Hello!
              </h2>
              <h4 className="title text-center mt-4" style={{ marginBottom: '30px' }}>
                Login into account
              </h4>
              <Form className="form-box px-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Form.Check type="checkbox" label="Remember me" />
                  </Col>
                  <Col xs={6} className="text-end">
                    <a href="#" className="forget-link">
                      Forget Password
                    </a>
                  </Col>
                </Row>
                <div className="mb-3">
                  <a href="" className="custom-link" id="#">
                    <Button type="submit" className="btn btn-block text-uppercase">
                      Login
                    </Button>
                  </a>
                </div>
                <hr className="my-4" />
                <div className="text-center mb-2">
                  Don't have an account?
                  <a href="" className="register-link">
                    Register here
                  </a>
                </div>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </main>
    </Container>
  )
}

export default Login;
