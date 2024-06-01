import { useState } from "react";
import React from "react";
import { Row, Col } from "react-bootstrap";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
import SortMovies from "../components/Sortmovies";
export default function Movies() {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars",
      Year: "1977",
      Type: "science-fiction",
      Poster: "src/assets/images/movie-avatar-card.webp",
    },
    {
      Title: "Titanic",
      Year: "1997",
      Type: "romantic",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
    },
    {
      Title: "Dune",
      Year: "2000",
      Type: "action",
      Poster:
        "https://www.imdb.com/title/tt15239678/mediaviewer/rm1391346433/?ref_=tt_ov_i",
    },
  ]);
  return (
    <>
      <h3>Movies</h3>
      <div>
        <Row className="d-flex justify-content-center">
          <SortMovies />
        </Row>
        <Row>
          <CarouselMoviesComponent />
        </Row>
      </div>
    </>
  );
}
