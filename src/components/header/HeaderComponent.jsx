import "./header.scss";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HeaderComponent() {
  return (
    <div className="page-container">
      <Container className="container-header d-flex flex-column justify-content-center align-items-center text-center">
        <Row className="d-flex justify-content-center align-items-center">
          <h3>
            RiWatch : Votre portail vers des millions de films, séries et
            célébrités. Plongez dans l'univers du cinéma !
          </h3>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <Button variant="primary" className="btn-header">
              Découvrir
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
