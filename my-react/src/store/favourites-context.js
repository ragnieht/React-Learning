import { createContext } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider(props) {
  return <FavouritesContext.Provider></FavouritesContext.Provider>;
}
