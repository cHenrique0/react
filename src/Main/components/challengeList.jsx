import ChallengeCard from "./challengeCard";
import styles from "../styles/challengeList.module.css";
import icons from "/public/Main/icons.module.json";

export default function ChallengeList() {
  function randomBackground() {
    const colors = [
      { color: "green", css: "--index-lime-green" },
      { color: "blue", css: "--index-soft-blue" },
      { color: "yellow", css: "--index-soft-orange" },
      { color: "violet", css: "--index-violet" },
      { color: "red", css: "--index-light-red-v2" },
      { color: "orange", css: "--index-light-red" },
    ];

    const iconsColors = {
      green: "#29BA66",
      blue: "#3F9CBB",
      yellow: "#E6A532",
      violet: "#5A1CBB",
      red: "#F04667",
      orange: "#D96C47",
    };

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      css: randomColor.css,
      iconColor: iconsColors[randomColor.color],
      icon: icons[Math.floor(Math.random() * icons.length)],
    };
  }

  return (
    <div className={styles.list}>
      <ChallengeCard
        level="Easy"
        title="Social Links Profile"
        links={[
          {
            url: "https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ",
            title: "Challenge Page",
          },
          {
            url: "https://github.com/cHenrique0/react/tree/practicing/src/SLP",
            title: "Repository",
          },
        ]}
        image="/SLP/design.jpg"
        borderBackground={randomBackground()}
      />
      <ChallengeCard
        level="Easy"
        title="Cards Feature Section"
        links={[
          {
            url: "https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK",
            title: "Challenge Page",
          },
          {
            url: "https://github.com/cHenrique0/react/tree/practicing/src/FCFS",
            title: "Repository",
          },
        ]}
        image="/FCFS/design.jpg"
        borderBackground={randomBackground()}
      />
    </div>
  );
}
