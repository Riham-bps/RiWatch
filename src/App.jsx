import NavbarComponent from "./components/common/navbar/NavbarComponent";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorite from "./pages/Favorite";
import FormLogin from "./pages/FormLogin";
import FooterComponent from "./components/common/footer/FooterComponent";
import FormSignUp from "./pages/FormSignUp";
import NotFound from "./pages/NotFound";
import DetailsMovie from "./pages/DetailsMovie";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./appStyle.scss";

function App() {
  return (
    <div className="app-container">
      <NavbarComponent />
      <div style={{ paddingTop: "90px" }} className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/signup" element={<FormSignUp />} />
            <Route path="*" element={<NotFound />} />
            {/* path non existant = page non trouvee */}

            <Route path="/details/:id" element={<DetailsMovie />} />
          </Routes>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
