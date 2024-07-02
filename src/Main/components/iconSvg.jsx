import styles from "../styles/iconSvg.module.css";

export default function IconSvg({ svg, path, fillCollor }) {
  return (
    <svg {...svg} className={styles.icon} style={{ fill: `${fillCollor}` }}>
      <path {...path}></path>
    </svg>
  );
}
