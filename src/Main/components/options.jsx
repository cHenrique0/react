import { GoFileCode, GoLinkExternal } from "react-icons/go";
import styles from "../styles/options.module.css";

export default function Options({ links, isVisible, onClose }) {
  let icon;

  return (
    isVisible && (
      <>
        <div className={styles.backdrop} onClick={onClose} />
        <div className={styles.options}>
          {links.map(
            (link, index) => (
              (icon = link.url.includes("github") ? (
                <GoFileCode />
              ) : (
                <GoLinkExternal />
              )),
              (
                <a href={link.url} key={index} target="_blank">
                  <span>{icon}</span>
                  {link.title}
                </a>
              )
            )
          )}
        </div>
      </>
    )
  );
}
