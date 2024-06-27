import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useEffect, useState } from "react";

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8000/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addNewPost(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddNewPost={addNewPost} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.name} comment={post.text} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "#FFF" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
