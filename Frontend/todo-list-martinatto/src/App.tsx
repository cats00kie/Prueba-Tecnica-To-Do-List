import Navbar from './components/Navbar';
import GridTareas from './components/GridTareas';
import { useTheme } from './hooks/useTheme';

export const App = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-950">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <GridTareas />
    </div>
  );
};
