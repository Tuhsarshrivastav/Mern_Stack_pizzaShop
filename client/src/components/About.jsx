import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          provident optio ut accusantium. Harum voluptas possimus, repellendus
          deserunt culpa magnam!
        </p>
        <h1>Our Speciallty</h1>
        <Row>
          <Col md={6}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus provident optio ut accusantium. Harum voluptas possimus,
              repellendus deserunt culpa magnam!
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus provident optio ut accusantium. Harum voluptas possimus,
              repellendus deserunt culpa magnam!
            </p>
          </Col>
        </Row>

        <Row>
          <h1>Out chief</h1>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eveniet enim perspiciatis fugiat nam nesciunt esse, sint possimus?
            Dolore ab consequatur itaque, repellendus excepturi corporis
            nesciunt ipsum sapiente incidunt nisi?
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eveniet enim perspiciatis fugiat nam nesciunt esse, sint possimus?
            Dolore ab consequatur itaque, repellendus excepturi corporis
            nesciunt ipsum sapiente incidunt nisi?
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eveniet enim perspiciatis fugiat nam nesciunt esse, sint possimus?
            Dolore ab consequatur itaque, repellendus excepturi corporis
            nesciunt ipsum sapiente incidunt nisi?
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            eveniet enim perspiciatis fugiat nam nesciunt esse, sint possimus?
            Dolore ab consequatur itaque, repellendus excepturi corporis
            nesciunt ipsum sapiente incidunt nisi?
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
