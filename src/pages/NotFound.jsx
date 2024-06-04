import { Navigate, useNavigate } from "react-router-dom";
import FooterComponent from "../components/common/footer/FooterComponent";
import { useEffect } from "react";
export default function NotFound() {
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
