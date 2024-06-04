import SortMovies from "../Sortmovies";
import CardMovieComponent from "../common/cardMovie/CardMovieComponent";
import { Container, Row, Col } from "react-bootstrap";
import { allMovies } from "../../data/movies";

export default function ListMovies() {
  function renderAllMovies() {
    return allMovies.map((movie) => (
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="d-flex justify-content-center"
        key={movie.id}
      >
        <CardMovieComponent movie={movie} />
      </Col>
    ));
  }
  return (
    <>
      <Container className="mx-0">
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={3}>
            <SortMovies />
          </Col>
          <Col xs={12} md={9}>
            <Row className="gy-4 justify-content-center">
              {renderAllMovies()}
            </Row>
          </Col>
        </Row>
      </Container>
      ;
    </>
  );
}
