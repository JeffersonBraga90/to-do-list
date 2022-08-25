import { TaskDetails } from '../App';

import styles from './Task.module.css';
import { Trash } from "phosphor-react";
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';

interface TaskProps {
 task: TaskDetails;
 onComplete: (taskId: string) => void;
 onRemove: (taskId: string) => void;
}


export function Task({ task, onComplete, onRemove}:TaskProps) {
  return(
    <li className={styles.container}>
      <div className={styles.check} onClick={() => onComplete(task.id)}>
         {
          task.isCompleted 
          ? <BsCheckCircleFill color='var(--purpleDark)'/> 
          : <BsCircle color='var(--blue)' />
         }
      </div>
      <p className={task.isCompleted ? styles.completed : styles.open}>
        {task.description}
      </p>
      <button className={styles.trash} onClick={() => onRemove(task.id)}>
        <Trash size={24}/>
      </button>
    </li>
  );
}