import styles from './Avatar.module.css';

interface AvatarProps {
  src: any;
  hasBorder?: boolean;
}

export function Avatar({src, hasBorder = true} : AvatarProps) { // estou passando o  hasBorder = true, para o valor padrão dele começar como true
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}