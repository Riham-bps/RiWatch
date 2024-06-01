import { Row, Col, Button, Container } from "react-bootstrap";
import "./singleMovieStyle.scss";

export default function SingleMovieComponent() {
  return (
    <Container>
      <Row className="mb-3">
        <Col md="4">
          <Row>
            <Col>2023</Col>
            <Col>2h30min</Col>
            <Col>Tous publics</Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-3">
          <img
            src="src/assets/images/movie-avatar-card.webp"
            className="image-description"
            alt="Movie Avatar"
          />
        </Col>
        <Col>
          <video width="500" autoPlay controls>
            <source
              src="src/assets/videos/Avatar_ The Way of Water _ Official Trailer.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button>Ajouter à mes favoris</Button>
        </Col>
      </Row>
      <Row className="text-secondary description-text mb-3">
        Un marine paraplégique envoyé sur la lune Pandora pour une mission
        unique est tiraillé entre suivre ses ordres et protéger le monde qu'il
        considère le sien.
      </Row>
      <Row className="mb-3">
        <Col md="4">
          <Row>
            <Col>
              <Button>Action</Button>
            </Col>
            <Col>
              <Button>Action</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
