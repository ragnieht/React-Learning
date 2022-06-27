import React from "react";
import { useSelector } from "react-redux";
import MeetupList from "../components/meetup/MeetupList";

export default function FavouritesPage() {
  const meetups = useSelector((state) => state.meetups);

  const onlyFav = meetups.filter((meetup) => meetup.isFav);

  return (
    <section>
      <MeetupList meetups={onlyFav} />
    </section>
  );
}
