import styles from './InputTask.module.css';
import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

interface InputTaskProps {
  handleAddTask: (taskDescription: string) => void;
}


export function InputTask({handleAddTask}:InputTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleAddTask(newTask);
    setNewTask('');
  }

  return(
    <form className={styles.search}>
      <input 
        type="search" 
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value) }
        />
      <button 
        type="submit"
        onClick={handleSubmit}
      >Criar 
       <PlusCircle size={16}/>
      </button>
    </form>
  );
}