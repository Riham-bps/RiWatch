import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.scss";
export default function FooterComponent() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 " fixed="bottom">
      <Container>
        <Row>
          <Col md="4" className="text-center text-md-left ">
            <h5>A Propos de Nous</h5>
            <p>
              Rejoignez-nous chez RiWatch pour explorer un monde de cinéma sans
              fin. Découvrez les dernières sorties, les classiques intemporels
              et bien plus encore.
            </p>
          </Col>
          <Col md="4" className="text-center">
            <h5>Contactez-Nous</h5>
            <ul className="list-unstyled">
              <li>Email: info@riwatch.com</li>
              <li>Phone: +000 000 0000</li>
            </ul>
          </Col>
          <Col md="4" className="text-center text-md-right">
            <h5>Suivez-Nous</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3">
            <p>© 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
