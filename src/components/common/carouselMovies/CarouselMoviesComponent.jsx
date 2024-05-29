import CardMovieComponent from "../cardMovie/CardMovieComponent";

export default function CarouselMoviesComponent() {
  return (
    <>
      <h2>Films </h2>
      <div className="d-flex justify-content-between">
        <CardMovieComponent />
        <CardMovieComponent />
        <CardMovieComponent />
        <CardMovieComponent />
      </div>
    </>
  );
}
