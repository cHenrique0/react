import styles from "./NewPost.module.css";

export default function NewPost({ onChangeText, onChangeName, onCancel }) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeText} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onChangeName} />
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
