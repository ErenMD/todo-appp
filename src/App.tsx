// src/App.tsx
import React from 'react';
import TaskList from './components/TaskList';
import './App.css'; // Diğer CSS dosyalarınızı burada import edin



const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Görev Yönetim Sistemi</h1>
        <TaskList />
      </header>
    </div>
  );
};

export default App;
