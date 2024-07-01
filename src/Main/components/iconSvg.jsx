import styles from "../styles/iconSvg.module.css";

export default function IconSvg({ svg, path, fillColor }) {
  return (
    <svg {...svg}>
      <path {...path}></path>
    </svg>
  );
}
