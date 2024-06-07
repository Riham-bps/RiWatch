const [favourites, setFavourites] = useState(() => {
  const localValue = localStorage.getItem("ITEMS");
  if (localValue == null) return [];

  return JSON.parse(localValue);
});

useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(favourites));
}, [favourites]);

function addMovie(movie) {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
}
