import React from "react";
import classes from "./Post.module.css";

export default function Post({ author, content }) {
  return (
    <article className={classes.post}>
      <h2>{author}</h2>
      <p>{content}</p>
    </article>
  );
}
