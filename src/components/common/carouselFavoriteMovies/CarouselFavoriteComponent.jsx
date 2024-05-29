import CardMovieComponent from "../cardMovie/CardMovieComponent";
import CardGroup from "react-bootstrap/CardGroup";

export default function CarouselFavoriteComponent() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <CardGroup className="d-flex flex-wrap justify-content-center">
          <div className="mx-2 my-3">
            <CardMovieComponent />
          </div>
          <div className="mx-2 my-3">
            <CardMovieComponent />
          </div>
        </CardGroup>
      </div>
    </>
  );
}
