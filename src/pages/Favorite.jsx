import { Row, Col, Button } from "react-bootstrap";
import SingleMovieComponent from "../components/SingleMovie/SingleMovie";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
export default function Favorite() {
  return (
    <>
      <h3>Title movie</h3>
      <SingleMovieComponent />
      <h3>Recommandations</h3>
      <CarouselMoviesComponent />
    </>
  );
}
