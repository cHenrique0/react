import ChallengeCard from "./challengeCard";
import styles from "../styles/challengeList.module.css";

export default function ChallengeList() {
  return (
    <div className={styles.list}>
      <ChallengeCard
        level="Easy"
        title="Social Links Profile"
        link="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ"
        image="/SLP/design.jpg"
        borderColor="--index-lime-green"
      />
      <ChallengeCard
        level="Easy"
        title="Cards Feature Section"
        link="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
        image="/FCFS/design.jpg"
        borderColor="--index-lime-green"
      />
    </div>
  );
}
