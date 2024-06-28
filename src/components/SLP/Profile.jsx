import Button from "./Button";
import styles from "./Profile.module.css";
import profilePicture from "/SLP/avatar-jessica.jpeg";

export default function Profile() {
  const buttonNames = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className={styles.card}>
      <img src={profilePicture} className={styles.picture} />
      <div className={styles.description}>
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
        <span>&ldquo;Front-end developer and avid reader.&rdquo;</span>
      </div>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}
