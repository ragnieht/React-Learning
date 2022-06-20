import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <div>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef}></input>
          </div>
          <div>
            <label htmlFor="image">Image Url</label>
            <input type="url" required id="image" ref={imageInputRef}></input>
          </div>
          <div>
            <label htmlFor="address">Meetup Address</label>
            <input
              type="text"
              required
              id="address"
              ref={addressInputRef}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Meetup Title</label>
            <textarea
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
            />
          </div>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
