import React, { useState } from 'react'; // React ve useState hook'u import edilir.
import TaskItem from './TaskItem'; // TaskItem bileşenini içeri aktarır.

interface Task { // Görevlerin yapısını tanımlıyoruz.
  id: number;
  name: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Frontend proje hazırlığı', completed: false },
    { id: 2, name: 'React.js öğrenimi', completed: false },
    { id: 3, name: 'Typescript pratiği', completed: true },
  ]);

  // Görevlerin tamamlanma durumunu değiştiren fonksiyon
  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div>
      <h2>Görev Listesi</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
