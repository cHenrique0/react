import { useState } from "react";
import styles from "./NewPost.module.css";

export default function NewPost({ onCancel }) {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  function inputTextHandler(event) {
    setText(event.target.value);
  }

  function inputNameHandler(event) {
    setName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    const postData = { id, name, text };
    console.log(postData);
    onCancel();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={inputTextHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={inputNameHandler} />
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
