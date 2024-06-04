import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./singleMovieStyle.scss";

import ReactPlayer from "react-player/youtube";

export default function SingleMovieComponent(props) {
  return (
    <Container>
      <h3>{props.movie.title}</h3>
      <Row className="mb-3">
        <Col md={4}>
          <Row>
            <Col>{props.movie.year}</Col>
            <Col>{props.movie.duration}</Col>
            <Col>{props.movie.age}</Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-3">
          <img
            src={props.movie.poster}
            className="image-description"
            alt="movie"
            style={{ height: "100%", width: "auto" }}
          />
        </Col>
        <Col>
          <ReactPlayer
            url={props.movie.video}
            style={{ height: "100%", width: "auto" }}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="primary" className="add-favorite-btn">
            Ajouter à mes favoris
          </Button>
        </Col>
      </Row>
      <Row className="text-secondary description-text mb-3">
        {props.movie.summary}
      </Row>
      <Row className="mb-3">
        <Col md={4}>
          <Row>
            <Col>
              {props.movie.type.map((element, index) => (
                <Button variant="secondary" key={index}>
                  {element}
                </Button>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
