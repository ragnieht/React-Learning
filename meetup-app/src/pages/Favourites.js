import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function Favourites() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFavs, setLoadedFavs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/favourites.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const favs = [];

        for (let key in data) {
          const fav = {
            id: key,
            ...data[key],
          };
          favs.push(fav);
        }
        setIsLoading(false);
        setLoadedFavs(favs);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <MeetupList datas={loadedFavs} />
    </div>
  );
}
