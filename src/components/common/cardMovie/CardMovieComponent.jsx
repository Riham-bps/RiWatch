import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, NavLink } from "react-router-dom";
import "./cardMovie.scss";

export default function CardMovieComponent(props) {
  return (
    <NavLink to={`/details/${props.movie.id}`}>
      <Card className="movie-card">
        <Card.Img variant="top" src={props.movie.poster} />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title>{props.movie.title}</Card.Title>
            <Button className="like-button">
              <i className="bi bi-heart"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </NavLink>
  );
}
