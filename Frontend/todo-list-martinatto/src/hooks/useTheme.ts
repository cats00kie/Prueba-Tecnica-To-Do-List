import { useEffect, useState } from 'react';

export function useTheme() {
  const getTema = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') return true;
    if (theme === 'light') return false;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [darkMode, setDarkMode] = useState(getTema);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
}
