<>
  <div className="d-flex justify-content-center">
    {props.movies.map((movie, index) => (
      <CardMovieComponent Poster={movie.Poster} />
    ))}
  </div>
</>;
<Card style={{ width: "15rem" }}>
  <Card.Img variant="top" src={Poster} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>Some quick example text to build on the card title.</Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>;
