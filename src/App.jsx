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
            comment1="Queria um emprego"
            comment2="To doidin pra fazer um dinheiro oh kkkk"
            comment3='me empregue'
          />

          <Post
            authorName='Abelardo Júnior'
            authorJob='Desenvolvedor Front-End'
            imgAuthor='https://github.com/abelardojr0.png'
            comment1="Cadê o salomão aqui?"
            comment2="Quiser chegar lá fora pra jogar um pouquinho... kkkk"
            comment3='SENAI'
          />
          
        </main>
      </div>
    </div>
  );
}
