import React from 'react';
import { render, screen } from '@testing-library/react'; // Render etmek için
import '@testing-library/jest-dom'; // Jest'in React bileşenlerini anlaması için
import TaskList from './TaskList'; // Test edilecek bileşen

describe('TaskList Component', () => {
  it('renders task list title', () => {
    render(<TaskList />);  // Bileşeni render et
    const titleElement = screen.getByText(/Görev Listesi/i); // 'Görev Listesi' yazısını kontrol et
    expect(titleElement).toBeInTheDocument(); // DOM içinde olmalı
  });

  it('renders task items', () => {
    render(<TaskList />);
    const taskElement = screen.getByText(/Frontend proje hazırlığı/i); // Görev adını kontrol et
    expect(taskElement).toBeInTheDocument();
  });
});
