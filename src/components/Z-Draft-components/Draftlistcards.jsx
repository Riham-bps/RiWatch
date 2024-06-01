import CardMovieComponent from "../common/cardMovie/CardMovieComponent";
import CardGroup from "react-bootstrap/CardGroup";
import "./draftlistcard.scss";
function UncontrolledExample() {
  return (
    <div className="d-flex justify-content-center">
      <CardGroup className="d-flex flex-wrap justify-content-center">
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
        <div className="mx-2 my-3">
          <CardMovieComponent />
        </div>
      </CardGroup>
    </div>
  );
}

export default UncontrolledExample;
