import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imgLink={props.imgAuthor} />

          <div className={styles.authorInfo}>
            <strong>{props.authorName}</strong>
            <span>{props.authorJob}</span>
          </div>
        </div>

        <time title="02  de fevereiro de 2024" dateTime="2024-02-02 15:30:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>{props.comment1}</p>
        <p>{props.comment2}</p>
        <p>
          <a href="#">#{props.comment3}</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
