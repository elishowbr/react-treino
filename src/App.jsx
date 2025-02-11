import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/elishowbr.png',
      name: 'Gustavo Martins',
      role: 'DESEMPREGADO'
    },
    content: [
      { type: "text", content: "Queria um emprego" },
      { type: "text", content: "To doidin pra fazer um dinheiro oh kkk" },
      { type: "link", content: "Me empregue" },
    ],
    publishedAt: new Date('2025-02-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/abelardojr0.png',
      name: 'Abelardo Júnior',
      role: 'Professor'
    },
    content: [
      { type: "text", content: "Cadê o salomão aqui?" },
      { type: "text", content: "Quiser chegar lá fora pra jogar um pouquinho... kkkk" },
      { type: "link", content: "SENAI" },
    ],
    publishedAt: new Date('2025-02-05 10:00:00')
  },
]

export function App(props) {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  );
}
