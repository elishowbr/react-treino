import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react";

const comentarios = [
  { pathImg : "https://github.com/elishowbr.png", commentAuthor : "Wil Wil Victor" , comment : "É, peãozin kkk"},
  { pathImg : "https://i1.sndcdn.com/artworks-kFGib4jDIv7eajLN-qmKWHw-t500x500.jpg", commentAuthor : "Rannah" , comment : "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"},
  { pathImg : "https://oyster.ignimgs.com/mediawiki/apis.ign.com/lego-batman-2-dc-super-heroes/9/95/Clayface.jpg", commentAuthor : "Pedro Salomão" , comment : "Éégua viado kkkk"},
]

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(comentarios)

  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateString = format(publishedAt, "'d' de 'LLLL', às 'HH:mm'h", { locale: ptBR })

  const publishedDataToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, {pathImg : "https://github.com/elishowbr.png", commentAuthor : "Wil Wil Victor", comment : newCommentText}])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        name="comment"
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map(({pathImg, commentAuthor, comment}) => {
          return (
            <Comment 
            profilePhotoLink={pathImg}
            comment={comment}
            commentAuthor={commentAuthor}
            onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  );
}
