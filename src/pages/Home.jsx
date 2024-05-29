import HeaderComponent from "../components/header/HeaderComponent";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
import FooterComponent from "../components/common/footer/FooterComponent";
export default function Home() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <CarouselMoviesComponent></CarouselMoviesComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}
