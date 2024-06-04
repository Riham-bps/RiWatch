import { Button } from "react-bootstrap";
import "./sortmoviesStyle.scss";
export default function SortMovies() {
  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3 border-page ">
        <div>
          <h5>Genres</h5>
          <Button>Action</Button>
          <Button>Romantique</Button>
          <Button>Science-fiction</Button>
        </div>
        <div>
          <h5>Classification d'âges</h5>
          <Button>10</Button>
          <Button>12</Button>
          <Button>16</Button>
          <Button>18</Button>
        </div>
        <div>
          <h5>Pays</h5>
          <Button>France</Button>
          <Button>USA</Button>
          <Button>Allemagne</Button>
        </div>
      </div>
    </>
  );
}
