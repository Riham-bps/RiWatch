import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorite from "./pages/Favorite";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/favorite" element={<Favorite></Favorite>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
