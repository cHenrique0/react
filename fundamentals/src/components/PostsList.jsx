import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList({ isPosting, onStopPosting }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  function inputTextHandler(event) {
    setText(event.target.value);
  }

  function inputNameHandler(event) {
    setName(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onChangeText={inputTextHandler}
            onChangeName={inputNameHandler}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={name} comment={text} />
        <Post author="Alice" comment="Hello World!" />
      </ul>
    </>
  );
}
