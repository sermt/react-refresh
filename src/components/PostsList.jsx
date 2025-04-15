import React from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts = useLoaderData();
  const postsList = posts.map((post) => (
    <Post key={post.id} author={post.author} id={post.id} content={post.content} />
  ));

  const emptyPostsList = (
    <h3 style={{ textAlign: "center", color: "white" }}>No posts yet!</h3>
  );
  
  return (
    <section>
      <ul className={classes.posts}>
        {posts.length === 0 ? emptyPostsList : postsList}
      </ul>
    </section>
  );
}
