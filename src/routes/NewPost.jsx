import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="content" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <menu className={classes.actions}>
          <Link type="button" to="/">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </menu>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function createPost({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { content: '...', author: '...' }
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify({
      ...postData,
      id: Math.random().toString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not create post." }), {
      status: 500,
      statusText: "Could not create post.",
    });
  }
  return redirect("/");
}
