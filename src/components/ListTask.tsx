import { TaskDetails } from '../App';
import { EmptyList } from './EmptyList';
import styles from './ListTask.module.css'
import { Task } from './Task';

interface ListTaskProps {
  tasks: TaskDetails[];
  handleRemoveTask: (taskId: string) => void;
  toggleCompletedTask: (taskId: string) => void;
}


export function ListTask({tasks, handleRemoveTask, toggleCompletedTask}:ListTaskProps) {
  
  function completedTask() {
    const completedTask = tasks.reduce((completed, allTasks) => {
      return completed + Number(allTasks.isCompleted);
    }, 0);

    return completedTask;
  }
  
  return (
    <div>
        <section className={styles.headerTask}>

          <div className={styles.contentHeader}>
            <p className={styles.textBlue}>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.contentHeader}>
            <p className={styles.textPurple}>Concluídas</p>
            <span>{completedTask()} de {tasks.length}</span>
          </div>

        </section>

        <ul className={styles.todo}>
          {
            tasks.length !== 0 
            ?(tasks.map(task => (
              <Task
                key={task.id}
                task={task}
                onRemove={handleRemoveTask}
                onComplete={toggleCompletedTask}
              />
              ))
            )
            : (
              <EmptyList />
              
             ) 
          }
        </ul>
    </div>
  );
}