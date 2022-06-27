import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

export default function NewMeetupPage() {
  const history = useHistory();
  function onAddHandler(newMeetup) {
    fetch(
      "https://react-getting-started-2a53c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(newMeetup),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddHandler} />
    </div>
  );
}
