import React from 'react';

interface TaskItemProps {
  task: {
    id: number;
    name: string;
    completed: boolean;
  };
  toggleTaskCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.name}</span>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Tamamlandı' : 'Tamamlanmadı'}
      </button>
    </li>
  );
};

export default TaskItem;
