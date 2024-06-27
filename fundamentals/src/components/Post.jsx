import styles from "./Post.module.css";

export default function Post({ author, comment }) {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{comment}</p>
    </div>
  );
}
