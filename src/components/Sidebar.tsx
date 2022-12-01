import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/Vitor-php.png"
        />
        <strong>Vitor Fernandes</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={22}/>
            Edição de Perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}
