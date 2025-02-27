import styles from "./Avatar.module.css";

export function Avatar({hasBorder = true, imgLink}) {
  return <img
    className={hasBorder ? styles.avatarBorder : styles.avatar}
    src={imgLink}
    alt="logoAvatar"
  />;
}
