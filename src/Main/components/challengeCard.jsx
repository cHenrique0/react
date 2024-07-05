import { useState } from "react";
import styles from "../styles/challengeCard.module.css";
import IconSvg from "./iconSvg";
import Options from "./options";

export default function ChallengeCard({
  title,
  image,
  links,
  borderBackground,
}) {
  const { css, iconColor, icon } = borderBackground;

  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  function toggleOptions() {
    if (optionsIsOpen) {
      setOptionsIsOpen(false);
      return;
    }
    setOptionsIsOpen(true);
  }

  return (
    <div className={styles.card} style={{ backgroundColor: `var(${css})` }}>
      <div className={styles.borderTop}>
        <IconSvg svg={icon.svg} path={icon.path} fillCollor={iconColor} />
      </div>
      <div className={styles.content}>
        <img
          src="/Main/icon-ellipsis.svg"
          className={styles.icon}
          onClick={toggleOptions}
        />
        <Options
          links={links}
          isVisible={optionsIsOpen}
          onClose={toggleOptions}
        />
        <h2>{title}</h2>
        <a href="ROTA PARA A PAGINA REACT" target="_blank">
          <img src={image} className={styles.image} />
        </a>
      </div>
    </div>
  );
}
