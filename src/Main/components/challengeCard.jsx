import styles from "../styles/challengeCard.module.css";

export default function ChallengeCard({
  level,
  title,
  description,
  image,
  link,
}) {
  return (
    <div className={styles.card}>
      <span>{level}</span>
      <h2>{title}</h2>
      <a href={link} target="_blank">
        <img src={image} />
      </a>
      <p>{description}</p>
    </div>
  );
}
