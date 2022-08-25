import styles from './Header.module.css';

import toDoListLogo from '../assets/logo-to-do-list.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={toDoListLogo} alt="Logomarca to do list" />
    </header>
  );
}