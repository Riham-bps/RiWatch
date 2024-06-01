import { Button } from "react-bootstrap";
import "./sortmoviesStyle.scss";
export default function SortMovies() {
  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3 border-page">
        <div>
          <h3>Genres</h3>
          <Button>Action</Button>
          <Button>Romantique</Button>
          <Button>Science-fiction</Button>
        </div>
        <div>
          <h3>Classification d'âges</h3>
          <Button>10</Button>
          <Button>12</Button>
          <Button>16</Button>
          <Button>18</Button>
        </div>
        <div>
          <h3>Pays</h3>
          <Button>France</Button>
          <Button>USA</Button>
          <Button>Allemagne</Button>
        </div>
      </div>
    </>
  );
}
