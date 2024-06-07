import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, NavLink } from "react-router-dom";
import "./cardMovie.scss";
import { useState } from "react";
import { Row } from "react-bootstrap";

export default function CardMovieComponent(props) {
  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={props.movie.poster} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
          <Button className="like-button" onClick={() => addMovie(props.movie)}>
            <i className="bi bi-heart"></i>
          </Button>
        </Card.Text>
      </Card.Body>
      <NavLink to={`/details/${props.movie.id}`} className="mx-2 mb-2">
        Détails
      </NavLink>
    </Card>
  );
}
