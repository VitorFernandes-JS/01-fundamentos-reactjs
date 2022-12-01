import styles from './Avatar.module.css';

export function Avatar(props: any) {
  return (
    <img className={styles.avatar} src={props.src} />
    );
}