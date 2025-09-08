import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

function AppNavbar() {
  return (
    <>
      <div className="topbar-dark py-2 d-none d-lg-flex">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="d-none d-md-flex align-items-center gap-3">
              <a href="#" className="social-link">
                <img src="/icons/facebook.svg" alt="facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/twitter.svg" alt="twitter" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/google.svg" alt="google" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/instagram.svg" alt="instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="/icons/search.svg" alt="search" />
              </a>
            </Col>

            <Col
              xs={12}
              md={6}
              className="text-md-end d-flex justify-content-between justify-content-md-end align-items-center"
            >
              <div className="d-flex align-items-center gap-3 auth-mini">
                <div className="d-none d-md-flex align-items-center">
                  <img src="/icons/user-icon.svg" alt="user" />
                  <a href="#login" className="auth-link">
                    Login
                  </a>
                </div>

                <span className="divider">|</span>

                <div className="d-none d-md-flex align-items-center">
                  <img src="/icons/edit.svg" alt="register" />
                  <a href="#register" className="auth-link">
                    Register Now
                  </a>
                </div>

                <span className="divider">|</span>

                <div className="d-flex align-items-center">
                  <img src="/icons/cart.svg" alt="cart" />
                  <a href="#cart" className="auth-link">
                    0 Items - ($0.00)
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Header area */}
      <header className="main-header d-none d-lg-flex">
        <Container>
          <Row className="align-items-center py-4">
            <Col
              md={4}
              className="d-none d-md-flex align-items-center contact-left"
            >
              <img src="/icons/phone.svg" alt="phone" className="me-3" />
              <div>
                <span className="small fw-bold">
                  Call US: (+84) 123 456 789
                </span>
                <div className="small text-muted fw-semibold">
                  E-mail: support@freshmeal.com
                </div>
              </div>
            </Col>

            <Col xs={12} md={4} className="text-center branding-col">
              <img src="/icons/logo.svg" alt="FreshMeal" height={56} />
            </Col>

            <Col
              md={4}
              className="d-none d-md-flex justify-content-end align-items-center contact-right"
            >
              <img src="/icons/clock.svg" alt="clock" className="me-3" />
              <div>
                <div className="small fw-bold">Working hours</div>
                <div className="small fw-semibold text-muted">
                  Mon - Sat (8: 00 am - 12: 00 am)
                </div>
              </div>
            </Col>
          </Row>

          {/* Nav Links Row */}
          <Row>
            <Col>
              <Navbar expand="lg">
                <Container fluid>
                  <Navbar.Toggle aria-controls="main-nav" />
                  <Navbar.Collapse
                    id="main-nav"
                    className="justify-content-center"
                  >
                    <Nav className="main-nav-links">
                      <Nav.Link href="#home" className="active">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about">About us</Nav.Link>
                      <Nav.Link href="#products">Products</Nav.Link>
                      <Nav.Link href="#blog">Blog</Nav.Link>
                      <Nav.Link href="#services">Services</Nav.Link>
                      <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="mobile-nav d-lg-none py-3">
        {/* White Navbar */}
        <Navbar expand="lg">
          <Container>
            {/* Logo */}
            <Navbar.Brand href="#home" className="logo">
              <img src="/icons/logo.svg" alt="FreshMeal" height="45" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav" className="py-4">
              <div className="d-flex align-items-center mb-3">
                <img src="/icons/cart-dark.svg" alt="cart" height={20} />
                <a href="#cart" className="auth-link ms-3 fw-bold">
                  0 Items - ($0.00)
                </a>
              </div>
              <Nav className="mobile-nav-links">
                <Nav.Link href="#home" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#about">About us</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact us</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#register">Register</Nav.Link>
              </Nav>

              <Col
                md={4}
                className="d-flex align-items-center contact-left mt-3"
              >
                <img src="/icons/phone.svg" alt="phone" className="me-2" />
                <div>
                  <span className="small fw-bold">
                    Call US: (+84) 123 456 789
                  </span>
                  <div className="small fw-semibold">
                    E-mail: support@freshmeal.com
                  </div>
                </div>
              </Col>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default AppNavbar;
