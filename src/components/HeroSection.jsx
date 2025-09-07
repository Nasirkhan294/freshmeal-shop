import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

function HeroSection() {
  return (
    <section className="hero-section">
      <Carousel indicators={false} interval={4000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <Container>
            <Row className="align-items-center">
              {/* Left Column */}
              <Col lg={7} className="text-start">
                <p className="welcome-text">
                  Welcome to <img src="/src/icons/logo-2.svg" alt="FreshMeal" />
                </p>
                <h1 className="hero-title">
                  The World Best <span className="highlight">Shoping</span>{" "}
                  Website
                </h1>
                <p>
                  Your one-stop destination for farm-fresh fruits, vegetables,
                  and groceries delivered right to your door. We believe in
                  quality, freshness, and convenience, ensuring that every meal
                  you prepare is healthy and delicious. Shop with confidence and
                  bring nature’s best to your table today!
                </p>
                <div className="hero-buttons">
                  <Button
                    variant="warning"
                    className="me-3 text-white"
                  >
                    Read More
                  </Button>
                  <Button variant="dark" className="btn-hover-secondary">
                    Shop Now
                  </Button>
                </div>
              </Col>
              {/* Right Column */}
              <Col lg={5}>
                <img
                  src="/src/assets/straw.png"
                  alt="Strawberry Jar"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        {/* Slide 2 */}
        <Carousel.Item>
          <Container>
            <Row className="align-items-center">
              {/* Left Column */}
              <Col lg={7} className="text-start">
                <p className="welcome-text">
                  Welcome to <img src="/src/icons/logo-2.svg" alt="FreshMeal" />
                </p>
                <h1 className="hero-title">
                  Fresh & Organic <span className="highlight">Food</span>{" "}
                  Everyday
                </h1>
                <p className="hero-desc">
                  Experience the goodness of farm-fresh produce with every
                  order. Eat healthy, live healthy – FreshMeal has you covered!
                </p>
                <div className="hero-buttons">
                  <Button variant="warning" className="me-3 text-white">
                    Read More
                  </Button>
                  <Button variant="dark" className="btn-hover-secondary">Shop Now</Button>
                </div>
              </Col>
              {/* Right Column */}
              <Col lg={5} className="text-center">
                <img
                  src="/src/assets/vegies.png"
                  alt="Strawberry Jar"
                  className="hero-img img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HeroSection;
