import { Col } from "react-bootstrap";
import CardMovieComponent from "../components/common/cardMovie/CardMovieComponent";

export default function Favorite({ favourites }) {
  function renderFavMovies() {
    return favourites.map((movie) => (
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
      <h3>FAVORITE</h3>
      {renderFavMovies()}
    </>
  );
}
