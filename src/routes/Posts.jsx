import React from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
function Post() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Post;

export async function Loader() {
  const serverURI = "http://localhost:8080/posts";

  try {
    const response = await fetch(serverURI);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
