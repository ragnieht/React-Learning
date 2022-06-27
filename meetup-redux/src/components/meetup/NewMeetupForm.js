import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function addHandler(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newMeetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      isFav: false,
    };
    props.onAddMeetup(newMeetup);
  }

  return (
    <Card>
      <div>
        <form className={classes.form} onSubmit={addHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" id="title" required ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image Url</label>
            <input type="url" id="image" required ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" id="address" required ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <textarea rows="5" id="title" required ref={descriptionInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </div>
    </Card>
  );
}
