import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { ListTask } from "./components/ListTask";

import './global.css';

export type TaskDetails = {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {
const [tasks, setTasks] = useState<TaskDetails[]>([]);

function handleAddTask(tasks: string) {
  setTasks(statePrev => [
    ...statePrev, {
      id: uuidv4(),
      description: tasks,
      isCompleted: false,
    }
  ]);
};

function handleRemoveTask(taskId: string) {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks);
};

function toggleCompletedTask(taskId: string) {
  const newTasks = tasks.map(task => {
    if(taskId === task.id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    };
    return task;
  });
  setTasks(newTasks);
};




  return(
    <>
      <Header />
      <InputTask handleAddTask={handleAddTask}  />
      <ListTask 
       tasks={tasks}
       handleRemoveTask={handleRemoveTask}
       toggleCompletedTask ={toggleCompletedTask}
      />
    </>
  );
}