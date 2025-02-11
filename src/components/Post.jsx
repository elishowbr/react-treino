import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'


const comments = [
  1, 2, 3
]

export function Post({ author, publishedAt, content }) {
  const publishedDateString = format(publishedAt, "'d' de 'LLLL', às 'HH:mm'h", { locale: ptBR })
  const publishedDataToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder
            imgLink={author.avatarUrl}
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="02  de fevereiro de 2024" dateTime={publishedAt.toISOString()}>
          {publishedDataToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(comment => {
          if (comment.type == 'text') {
            return <p>{comment.content}</p>
          } else if (comment.type == 'link') {
            return <p><a href="#">{comment.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map(comment => {
          return (
            <Comment />
          )
        })}
      </div>
    </article>
  );
}
