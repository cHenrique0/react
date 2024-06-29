import Card from "./Card";
import styles from "../styles/MainPage.module.css";

export default function MainPage() {
  const cardInfo = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      iconPath: "/FCFS/icon-supervisor.svg",
      color: "--fcfs-cyan",
    },
    {
      title: "Team Builder",
      description:
        "Scans our talents network to create the optimal team for your project",
      iconPath: "/FCFS/icon-team-builder.svg",
      color: "--fcfs-red",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      iconPath: "/FCFS/icon-karma.svg",
      color: "--fcfs-orange",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      iconPath: "/FCFS/icon-calculator.svg",
      color: "--fcfs-blue",
    },
  ];
  return (
    <main>
      <div className={styles.header}>
        <h1>
          Reliable, efficient delivery
          <br />
          <span>Powered by Technology</span>
        </h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.col1}>
          <Card
            title={cardInfo[0].title}
            description={cardInfo[0].description}
            iconPath={cardInfo[0].iconPath}
            borderColor={cardInfo[0].color}
          />
        </div>
        <div className={styles.col2}>
          <Card
            title={cardInfo[1].title}
            description={cardInfo[1].description}
            iconPath={cardInfo[1].iconPath}
            borderColor={cardInfo[1].color}
          />
          <Card
            title={cardInfo[2].title}
            description={cardInfo[2].description}
            iconPath={cardInfo[2].iconPath}
            borderColor={cardInfo[2].color}
          />
        </div>
        <div className={styles.col3}>
          <Card
            title={cardInfo[3].title}
            description={cardInfo[3].description}
            iconPath={cardInfo[3].iconPath}
            borderColor={cardInfo[3].color}
          />
        </div>
      </div>
    </main>
  );
}
