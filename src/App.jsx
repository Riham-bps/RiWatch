import NavbarComponent from "./components/common/navbar/NavbarComponent";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorite from "./pages/Favorite";
import FormLogin from "./pages/FormLogin";
import FormSignUp from "./pages/FormSignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarComponent></NavbarComponent>:
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          <Route path="/login" element={<FormLogin></FormLogin>}></Route>
          <Route path="/signup" element={<FormSignUp></FormSignUp>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
