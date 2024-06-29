import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <div>
        <h2>Team Builder</h2>
        <p>Alguma descrição do card grande que descreva o descrito</p>
      </div>
      <img className={styles.icon} src="/public/FCFS/icon-calculator.svg" />
    </div>
  );
}
