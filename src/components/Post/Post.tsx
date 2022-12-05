import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  // condição para formatar o conteúdo do post, se o texto é um link ou um parágrafo em si
  const contentFormatted = content.map((item) => {
    if (item.type === "paragraph") {
      return <p>{item.content}</p>;
    }
    return <a href="#">{item.content}</a>;
  });

  function handleCreateNewComment() {
    event.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página
    setComments([...comments, newCommentText]); // adiciona um novo comentário
    setNewCommentText(""); // limpa o input
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value); // pega o valor do input e adiciona no estado
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>{contentFormatted}</div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea name="comment" placeholder="Comente aqui" onChange={handleNewCommentChange} value={newCommentText}/>

        <button type="submit">Comentar</button>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
