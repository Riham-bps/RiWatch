import HeaderComponent from "../components/header/HeaderComponent";
import CarouselMoviesComponent from "../components/common/carouselMovies/CarouselMoviesComponent";
import CarouselFavoriteComponent from "../components/common/carouselFavoriteMovies/CarouselFavoriteComponent";
import FooterComponent from "../components/common/footer/FooterComponent";
export default function Home() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h3>Nos dernières sorties</h3>
      <CarouselMoviesComponent></CarouselMoviesComponent>
      <h3>De votre liste des favoris </h3>
      <CarouselFavoriteComponent></CarouselFavoriteComponent>
      <h3>Les célébrités les plus populaires </h3>

      <FooterComponent></FooterComponent>
    </>
  );
}
