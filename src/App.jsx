import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          <Post
            authorName='Gustavinho da T.I'
            authorJob='T.I Worker'
            imgAuthor='https://github.com/gustavuhh1.png'
            comment1="Rock demais aprender isso"
            comment2="Estou chegando a novos patamares!"
            comment3='TMJ'
          />

          <Post
            authorName='Diego Sampaio'
            authorJob='DEV FULLSTACK'
            imgAuthor='https://github.com/elishowbr.png'
            comment1="Indo cada vez mais longe!"
            comment2="Isso está muito divertido!"
            comment3='EHNOIS'
          />
          
        </main>
      </div>
    </div>
  );
}
