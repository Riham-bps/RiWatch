import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.scss";

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <div className="d-flex justify-content-around">
          <Link className="navbar-brand text-secondary" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
            RiWatch
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-secondary">
            <CustomLink to="/home">Accueil</CustomLink>
            <CustomLink to="/movies">Films</CustomLink>
            <CustomLink to="/favorite">Favoris</CustomLink>
          </ul>
        </div>
        <div>
          <form className="search-form d-flex justify-content-around">
            <input
              className="form-control m-2"
              type="search"
              placeholder="Rechercher ..."
              aria-label="Search"
            />
            <div className="d-flex align-items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </form>
        </div>

        <div className="d-flex justify-content-around ">
          <div>
            <CustomLink to="/login">S'inscrire</CustomLink>
          </div>
          <div className="ms-2">
            <CustomLink to="/signup">Connexion</CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  if (to == "/login" || to == "/signup") {
    return (
      <button className="rounded">
        <Link className="nav-link " to={to} {...props}>
          {children}
        </Link>
      </button>
    );
  } else {
    return (
      <li className={`nav-item ${isActive ? "active" : ""}`}>
        <Link className="nav-link text-secondary " to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
