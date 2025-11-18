import Navbar from './components/Navbar';
import GridTareas from './pages/GridTareas';
import Login from './pages/Login';
import Register from './pages/Register';
import { useTheme } from './hooks/useTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

export const App = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950">
      <div className="flex-1">
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<GridTareas />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
};
