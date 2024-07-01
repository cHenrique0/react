import ChallengeCard from "./challengeCard";
import styles from "../styles/challengeList.module.css";

export default function ChallengeList() {
  function randomColor() {
    const colors = [
      "--index-light-red",
      "--index-soft-blue",
      "--index-light-red-v2",
      "--index-lime-green",
      "--index-violet",
      "--index-soft-orange",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className={styles.list}>
      <ChallengeCard
        level="Easy"
        title="Social Links Profile"
        link="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ"
        image="/SLP/design.jpg"
        borderColor={randomColor()}
      />
      <ChallengeCard
        level="Easy"
        title="Cards Feature Section"
        link="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
        image="/FCFS/design.jpg"
        borderColor={randomColor()}
      />
    </div>
  );
}
