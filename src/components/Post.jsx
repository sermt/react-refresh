import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export default function Post({ author, content,id }) {
  return (
    <article className={classes.post}>
      <Link to={`/${id}`}>
        <h2>{author}</h2>
        <p>{content}</p>
      </Link>
    </article>
  );
}
