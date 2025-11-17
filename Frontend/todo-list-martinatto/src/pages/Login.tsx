import { useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // TODO: mandar datitos del form al backend
    console.log('Login:', form);
  }
  return (
    <div className="flex flex-1 items-center justify-center pt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
      >
        <h1 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Iniciar Sesión
        </h1>

        <div>
          <label className="mb-1 block text-sm text-gray-900 dark:text-gray-100">
            Nombre
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500/40 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-900 dark:text-gray-100">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500/40 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2 font-medium text-white transition-colors hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Registrate!
          </a>
        </p>
      </form>
    </div>
  );
}
