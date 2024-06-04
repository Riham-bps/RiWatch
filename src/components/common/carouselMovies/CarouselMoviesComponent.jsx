import CardMovieComponent from "../cardMovie/CardMovieComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousselMoviesStyle.scss";
import { allMovies } from "../../../data/movies";

export default function CarouselMoviesComponent() {
  function renderAllMovies() {
    return allMovies.map((movie) => (
      <CardMovieComponent movie={movie} key={movie.id} />
    ));
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>{renderAllMovies()}</Carousel>; ;
    </>
  );
}
