import React from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostsList({ isModalVisible, setIsModalVisible }) {
  const [posts, setPosts] = React.useState([]);
  const postsList = posts.map((post) => (
    <Post key={post.id} author={post.author} content={post.content} />
  ));

  const emptyPostsList = (
    <h3 style={{ textAlign: "center", color: "white" }}>No posts yet!</h3>
  );

  const handleNewPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function handleToggleModal() {
    setIsModalVisible((prevState) => !prevState);
  }

  return (
    <section>
      {isModalVisible ? (
        <Modal onToggleModal={handleToggleModal}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onCancel={setIsModalVisible}
            onNewPost={handleNewPost}
          />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        {posts.length === 0 ? emptyPostsList : postsList}
      </ul>
    </section>
  );
}
