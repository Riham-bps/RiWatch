import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  if (to === "/login" || to === "/signup") {
    return (
      <Button variant="outline-secondary " className="rounded mx-3 btn-login">
        <Link className="nav-link " to={to} {...props}>
          {children}
        </Link>
      </Button>
    );
  } else {
    return (
      <Link
        className={`nav-link nav-item text-secondary mx-auto my-auto ${
          isActive ? "active" : ""
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
  }
}

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#" className="text-secondary">
          <i className="bi bi-play-fill "></i>RiWatch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <CustomLink to="/home">Accueil</CustomLink>
            <CustomLink to="/movies">Films</CustomLink>
            <CustomLink to="/favorite">Favoris</CustomLink>
            <CustomLink to="/login">S'inscrire</CustomLink>
            <CustomLink to="/signup">Connexion</CustomLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              {" "}
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
