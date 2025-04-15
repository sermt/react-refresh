import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal >
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.content}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;


export async function PostDetailsLoader({ params }) {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok ) {
    throw new Response(JSON.stringify({ message: 'Could not fetch post.' }), {
      status: 500,
      statusText: 'Could not fetch post.',
    });
  }
  const {post} = await response.json();
  return post;
}