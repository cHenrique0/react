import ChallengeCard from "./challengeCard";
import styles from "../styles/challengeList.module.css";
import icons from "/public/Main/icons.module.json";

export default function ChallengeList() {
  function randomBackground() {
    const colors = [
      "--index-light-red",
      "--index-soft-blue",
      "--index-light-red-v2",
      "--index-lime-green",
      "--index-violet",
      "--index-soft-orange",
    ];

    return {
      color: colors[Math.floor(Math.random() * colors.length)],
      icon: icons[Math.floor(Math.random() * icons.length)],
    };
  }

  return (
    <div className={styles.list}>
      <ChallengeCard
        level="Easy"
        title="Social Links Profile"
        link="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ"
        image="/SLP/design.jpg"
        borderBackground={randomBackground()}
      />
      <ChallengeCard
        level="Easy"
        title="Cards Feature Section"
        link="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
        image="/FCFS/design.jpg"
        borderBackground={randomBackground()}
      />
    </div>
  );
}
