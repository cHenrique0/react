import styles from "../styles/challengeCard.module.css";

export default function ChallengeCard({
  level,
  title,
  image,
  link,
  borderColor,
}) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `var(${borderColor})` }}
    >
      <div className={styles.borderTop}></div>
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
