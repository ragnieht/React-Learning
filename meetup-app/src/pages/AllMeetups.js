import React, { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (let key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
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
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}
