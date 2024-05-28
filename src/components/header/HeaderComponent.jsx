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
      <Container className="h-100 ">
        <Row className="d-flex justify-content-center align-items-center ">
          <div className="header-description text-center text-secondary">
            RiWatch : Votre portail vers des millions de films, séries et
            célébrités. Plongez dans l'univers du cinéma !
          </div>
        </Row>

        <Row className="header-button d-flex justify-content-center align-items-center ">
          <Button>Découvrir</Button>
        </Row>
      </Container>
    </div>
  );
}
