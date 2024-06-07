import { Row, Col, Button } from "react-bootstrap";
import SingleMovieComponent from "../components/SingleMovie/SingleMovie";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
import { allMovies } from "../data/movies";
import { useParams } from "react-router-dom";
export default function DetailsMovie() {
  const { id } = useParams();
  const movie = allMovies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Film non trouvé</div>;
  }
  return (
    <>
      <SingleMovieComponent movie={movie} />
      <h3>Recommandations</h3>
      <CarouselMoviesComponent />
    </>
  );
}
