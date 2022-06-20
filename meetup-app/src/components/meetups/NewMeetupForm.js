import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
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
    };

    props.onAddMeetup(newMeetup);
  };

  return (
    <Card>
      <div className={classes.form}>
        <form className={classes.control} onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div>
            <label htmlFor="image">Image Url</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div>
            <label htmlFor="address">Meetup Address</label>
            <input type="text" required id="address" ref={addressInputRef} />
          </div>
          <div>
            <label htmlFor="title">Meetup Title</label>
            <textarea
              required
              id="description"
              rows="5"
              ref={descriptionInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button> Add Meetup</button>
          </div>
        </form>
      </div>
    </Card>
  );
}
