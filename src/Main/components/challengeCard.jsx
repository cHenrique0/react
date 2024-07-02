import styles from "../styles/challengeCard.module.css";
import IconSvg from "./iconSvg";

export default function ChallengeCard({
  level,
  title,
  image,
  link,
  borderBackground,
}) {
  const { css, iconColor, icon } = borderBackground;
  return (
    <div className={styles.card} style={{ backgroundColor: `var(${css})` }}>
      <div className={styles.borderTop}>
        <IconSvg svg={icon.svg} path={icon.path} fillCollor={iconColor} />
      </div>
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
