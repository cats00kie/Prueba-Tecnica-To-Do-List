import { useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa';

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="flex w-full items-center justify-between bg-blue-600 px-6 py-4 text-white shadow dark:bg-gray-900">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <div className="relative flex items-center gap-2" ref={dropdownRef}>
        <span className="text-lg">User</span>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="focus:outline-none"
        >
          <FaUserCircle size={32} />
        </button>

        {open && (
          <div className="absolute right-0 z-10 mt-40 w-32 rounded-md bg-white py-2 text-black shadow-md dark:bg-gray-800 dark:text-white">
            <button
              type="button"
              className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              {darkMode ? 'Apariencia' : 'Apariencia'}
            </button>
            <hr className="my-1 border-gray-300 dark:border-gray-600" />
            <button
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => alert('Logging out...')} //CAMBIAR A TOAST
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
