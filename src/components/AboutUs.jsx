import { Container, Row, Col, Button } from "react-bootstrap";

function AboutUs() {
  return (
    <section className="top-padding" id="about">
      <div className="text-center px-3">
        <h4 className="heading">About Fresh Meal</h4>
        <img src="/public/icons/hr.svg" alt="divider" className="mb-5 img-fluid" />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src="/public/assets/yogurt.png"
              alt="Yougurt"
              className="img-fluid"
            />
          </Col>
          <Col lg={6}>
            <h5 className="heading large-font">
              Freshmeal is a long established fact that a reader will be
              distracted
            </h5>
            <p className="my-5">
              At FreshMeal, we believe that good health starts with fresh food.
              Our journey began with a simple mission – to make farm-fresh
              produce, healthy groceries, and everyday essentials easily
              accessible to everyone. Over the years, we’ve built lasting
              relationships with trusted farmers and suppliers to ensure every
              product meets our high standards of quality and freshness. With a
              passion for healthy living, FreshMeal is more than just a store –
              it’s your partner in creating wholesome meals for you and your
              family.
            </p>
            <Button variant="dark" className="fw-bold py-2 px-3 btn-hover-secondary">Read More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
