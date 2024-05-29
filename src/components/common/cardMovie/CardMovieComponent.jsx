import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cardMovie.scss";

export default function CardMovieComponent() {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src="src/assets/images/movie-avatar-card.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
