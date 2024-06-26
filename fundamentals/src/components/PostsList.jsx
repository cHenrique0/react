import Post from "./Post";
import styles from "./PostsList.module.css";

export default function PostsList({ posts = [] }) {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post author={post.author} comment={post.comment} />
        </li>
      ))}
    </ul>
  );
}
