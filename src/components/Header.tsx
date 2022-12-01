import styles from "./Header.module.css"

import reactLogo from "../assets/react-logo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={reactLogo} alt="Logo React" />
            <h1>ReactFeed</h1>
        </header>
    );
}