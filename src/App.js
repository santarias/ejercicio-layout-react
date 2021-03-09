import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="contenedor-general flex-column px-0 vh-100">
      <Row as="header" className="px-3 py-4">
        <h1 className="mb-0">Titulo</h1>
      </Row>
      <Row as="main" className="flex-grow-1">
        <Col md={8} className="principal px-3 py-4">
          <h2 className="px-3">Titular de la noticia</h2>
          <p className="px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
          laboriosam
          repellat quasi voluptatum
          asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
          asperiores
          dolore labore accusantium quo!
            </p>
          <p className="mb-0 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
          autem
          veniam non at maxime, vero
          nobis
          accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
          harum? Libero, repellat?
            </p>
        </Col>
        <Col md={4} className="sidebar px-3 py-4">
          <h3 className="px-3">Categorías</h3>
          <Row as="ul" className="list-unstyled">
            <Col lg={12}>Noticias de deporte</Col>
            <Col lg={12}>Noticias de ocio</Col>
            <Col lg={12}>Noticias de política</Col>
            <Col lg={12}>Noiticias de espectáculos</Col>
          </Row>
          <h3 className="px-3">Otras cosas</h3>
          <Row as="ul" className="list-unstyled">
            <Col lg={12}>Nosequé</Col>
            <Col lg={12}>Nosecuánto</Col>
            <Col lg={12} className="mb-0">Talycual</Col>
          </Row>
        </Col>
      </Row>
      <Row as="footer" className="mb-0 px-3 py-4">
        <Col className="mb-0 text-center"> Texto del footer</Col>
      </Row>
    </Container>
  );
}

export default App;
