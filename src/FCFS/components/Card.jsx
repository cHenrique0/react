import styles from "../styles/Card.module.css";

export default function Card({ title, description, borderColor, iconPath }) {
  return (
    <div className={styles.card} style={{ borderColor: `var(${borderColor})` }}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img className={styles.icon} src={iconPath} />
    </div>
  );
}
