import React, { useContext } from "react";
import { FavouritesContext } from "../components/store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = (
      <div>
        <p>You have no favourites, go add some!</p>
      </div>
    );
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>Favourites</h1>
      {content}
    </section>
  );
}
