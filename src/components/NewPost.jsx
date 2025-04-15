import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onNewPost }) {
  const [formValue, setFormValue] = useState({
    id: Math.random().toString(),
    name: "",
    content: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();

    onNewPost(formValue);
    onCancel();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(event) =>
            setFormValue((prevValue) => ({
              ...prevValue,
              content: event.target.value,
            }))
          }
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={(event) =>
            setFormValue((prevValue) => ({
              ...prevValue,
              author: event.target.value,
            }))
          }
          required
        />
      </p>
      <menu className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </menu>
    </form>
  );
}

export default NewPost;
