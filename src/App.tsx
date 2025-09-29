import React from 'react';
import Dashboard from './pages/Dashboard';
import { useDarkMode } from './hooks/useDarkMode';
import './index.css';

function App() {
  // Initialize dark mode
  useDarkMode();

  return <Dashboard />;
}

export default App;