import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { ChangeEvent, FormEvent, useState } from "react";

interface ContentProps {
  type: "paragraph" | "link";
  content: string;
}

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: ContentProps[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post bacana!", "Muito bom!"]);
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
      return <p key={item.content}>{item.content}</p>;
    }
    return (
      <a key={item.content} href="#">
        {item.content}
      </a>
    );
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página
    if (newCommentText.trim() === "") {
      return;
    }
    setComments([...comments, newCommentText]); // adiciona um novo comentário
    setNewCommentText(""); // limpa o input
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value); // pega o valor do input e adiciona no estado
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (item) => item !== comment
    ); // filtra os comentários, excluindo o comentário deletado
    setComments(commentsWithoutDeletedOne);
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

        <textarea
          name="comment"
          placeholder="Comente aqui"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
        />

        <button type="submit" disabled={newCommentText === "" ? true : false}>Comentar</button>
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
