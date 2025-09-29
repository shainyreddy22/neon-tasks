import { useEffect } from 'react';
import { useTaskStore } from '../store';

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useTaskStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};