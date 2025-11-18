import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function Register() {
  const [form, setForm] = useState({
    usuario: '',
    email: '',
    password: '',
  });
  const navigator = useNavigate();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al crear la cuenta');
        else {
          toast.success('Cuenta creada con éxito, iniciando sesión...');
          fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: form.email,
              password: form.password,
            }),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              localStorage.setItem('apiKey', data.access_token);
              localStorage.setItem('usuarioId', data.usuarioId);
              localStorage.setItem('usuario', data.usuario);
              navigator('/');
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="flex flex-1 items-center justify-center pt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded-xl border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
      >
        <h1 className="mb-2 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Crear cuenta
        </h1>

        <div>
          <label className="mb-1 block text-sm text-gray-900 dark:text-gray-100">
            Nombre de Usuario
          </label>
          <input
            type="text"
            name="usuario"
            value={form.usuario}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500/40 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-900 dark:text-gray-100">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
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
          Registrarse
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Iniciar sesión
          </a>
        </p>
      </form>
    </div>
  );
}
