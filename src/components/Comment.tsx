import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

export function Comment({ profilePhotoLink, comment, commentAuthor, onDeleteComment }) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(content) {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  // Sempre que você for atualizar uma informação que depende do valor que ela tinha anteriormente (depende dela mesmo)
  // É bom atualizar em tempo real utilizando essa arrow function acima

  return (
    <div className={styles.comment}>
      <Avatar
        imgLink={profilePhotoLink}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{commentAuthor}</strong>
              <time title="02  de fevereiro de 2024" dateTime="2024-02-02 15:30:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
