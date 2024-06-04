import { Navigate, useNavigate } from "react-router-dom";
import FooterComponent from "../components/common/footer/FooterComponent";
import { useEffect } from "react";
export default function NotFound() {
  // Hook use navigate permet de switcher sur une page ici home dans mon exemple je reste 1seconde sur la page notfound puis switcher sur la page home
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    <>
      <h1>NotFound</h1>
    </>
  );
}
