import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar imgLink="https://github.com/MiqueiasMaia.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Miqueias Maia</strong>
              <time title="02  de fevereiro de 2024" dateTime="2024-02-02 15:30:00">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar Comentário">
                <Trash size={20} />
              </button>
          </header>

          <p>Muito bom, Boa aplicação de números mágicos!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
