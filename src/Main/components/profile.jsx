import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/prodile.module.css";

export default function Profile({
  name,
  picPath,
  links: { github, linkedin, instagram },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={picPath} />
        <span>Made by</span>
        <h1>{name}</h1>
      </div>
      <div className={styles.social}>
        <a href={github} target="_blank">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a href={linkedin} target="_blank">
          <FaLinkedinIn />
          <span>LinkedIn</span>
        </a>
        <a href={instagram} target="_blank">
          <FaInstagram />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
}
