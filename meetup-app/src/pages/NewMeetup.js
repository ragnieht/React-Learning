import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

export default function NewMeetup() {
  const history = useHistory();
  function addMeetupHandler(newMeetup) {
    fetch(
      "https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetup),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => history.replace("/"));
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}
