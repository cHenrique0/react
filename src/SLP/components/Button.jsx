import styles from "../styles/Button.module.css";

export default function Button({ name }) {
  return <button className={styles.button}>{name}</button>;
}
