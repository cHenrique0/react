import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostsList.module.css";
import { useState } from "react";

export default function PostsList() {
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
      <NewPost
        onChangeText={inputTextHandler}
        onChangeName={inputNameHandler}
      />
      <ul className={styles.posts}>
        <Post author={name} comment={text} />
        <Post author="Alice" comment="Hello World!" />
      </ul>
    </>
  );
}
