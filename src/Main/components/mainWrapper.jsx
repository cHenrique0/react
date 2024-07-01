import ChallengeList from "./challengeList";
import Profile from "./profile";
import styles from "../styles/mainWrapper.module.css";

export default function MainWrapper() {
  const links = {
    github: "https://github.com/cHenrique0",
    linkedin: "https://www.linkedin.com/in/claudio-henrique-20/",
    instagram: "https://www.instagram.com/7_chenrique/",
  };

  return (
    <div className={styles.wrapper}>
      <Profile picPath="/Main/pic.jpg" name="Claudio Henrique" links={links} />
      <ChallengeList />
    </div>
  );
}
