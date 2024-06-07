import HeaderComponent from "../components/header/HeaderComponent";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
export default function Home() {
  return (
    <>
      <HeaderComponent />
      <h3>Nos dernières sorties</h3>
      <CarouselMoviesComponent></CarouselMoviesComponent>
    </>
  );
}
