import styles from './EmptyList.module.css';

import imgClipboard from '../assets/clipboard.svg'

export function EmptyList() {
  return(
        <div className={styles.list}>
          <img src={imgClipboard} alt="Icone Clipboard" />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}