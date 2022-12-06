import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Vitor-php.png",
      name: "Vitor Fernandes",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Olá!" },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit1.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit2.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit3.",
      },
      { type: "link", content: "teste</a>" },
    ],
    publishedAt: new Date("2022-12-05 08:13:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/reis0694.png",
      name: "Isabella Reis",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Olá, Rede!" },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit1.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit2.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit3.",
      },
      { type: "link", content: "teste1111111</a>" },
    ],
    publishedAt: new Date("2022-12-16 11:13:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
