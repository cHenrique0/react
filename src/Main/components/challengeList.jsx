import ChallengeCard from "./challengeCard";
import styles from "../styles/challengeList.module.css";

export default function ChallengeList() {
  return (
    <div className={styles.list}>
      <ChallengeCard
        level="Level"
        title="Social Links Profile"
        link="https://www.google.com"
        image="/SLP/design.jpg"
        borderColor="--index-lime-green"
      />
      <ChallengeCard
        level="Level"
        title="Challenge Title"
        link="https://www.google.com"
        image={"https://via.placeholder.com/250x150"}
        borderColor="--index-lime-green"
      />
      <ChallengeCard
        level="Level"
        title="Challenge Title"
        link="https://www.google.com"
        image={"https://via.placeholder.com/250x150"}
        borderColor="--index-lime-green"
      />
      <ChallengeCard
        level="Level"
        title="Challenge Title"
        link="https://www.google.com"
        image={"https://via.placeholder.com/250x150"}
        borderColor="--index-lime-green"
      />
      <ChallengeCard
        level="Level"
        title="Challenge Title"
        link="https://www.google.com"
        image={"https://via.placeholder.com/250x150"}
        borderColor="--index-lime-green"
      />
    </div>
  );
}
