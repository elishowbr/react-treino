import styles from "./Post.module.css";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar linkImg="https://github.com/gustavuhh1.png" />

          <div className={styles.authorInfo}>
            <strong>Gustavinho da T.I</strong>
            <span>T.I Worker</span>
          </div>

        </div>

        <time title="02  de fevereiro de 2024" dateTime="2024-02-02 15:30:00">
          Publicado há 1h
        </time>

      </header>

      <div className={styles.content}>
        <p>Odiando a Rannah</p>
        <p>Como que pode</p>
        <p><a href="#">#BOLADO</a></p>
      </div>

    </article>
  );
}
