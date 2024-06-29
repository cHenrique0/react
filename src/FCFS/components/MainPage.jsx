import Card from "./Card";
import styles from "../styles/MainPage.module.css";

export default function MainPage() {
  const cardInfo = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      iconPath: "/public/FCFS/icon-supervisor.svg",
      color: "--fcfs-cyan",
    },
    {
      title: "Team Builder",
      description:
        "Scans our talents network to create the optimal team for your project",
      iconPath: "/public/FCFS/icon-team-builder.svg",
      color: "--fcfs-red",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      iconPath: "/public/FCFS/icon-karma.svg",
      color: "--fcfs-orange",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      iconPath: "/public/FCFS/icon-calculator.svg",
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
        {cardInfo.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            iconPath={card.iconPath}
            borderColor={card.color}
          />
        ))}
      </div>
    </main>
  );
}
