import styles from "../styles/challengeCard.module.css";

export default function ChallengeCard({
  level,
  title,
  image,
  link,
  borderColor,
}) {
  return (
    <div className={styles.card}>
      <div
        className={styles.borderTop}
        style={{ backgroundColor: `var(${borderColor})` }}
      ></div>
      <div className={styles.content}>
        <span>{level}</span>
        <h2>{title}</h2>
        <a href={link} target="_blank">
          <img src={image} />
        </a>
      </div>
    </div>
  );
}
