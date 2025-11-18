import { useState } from 'react';
import Modal from './Modal';
import { toast } from 'sonner';

interface ModalModificarProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tarea: {
    id: string;
    titulo: string;
    descripcion: string;
    fecha: string;
    usuarioId?: string;
  };
}

export default function ModalModificar({
  open,
  onClose,
  onConfirm,
  tarea,
}: ModalModificarProps) {
  const [form, setForm] = useState(tarea);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch(`http://localhost:3000/tareas/` + tarea.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al modificar la tarea');
        toast.success('Tarea modificada con éxito');
        onConfirm();
        onClose();
      })
      .catch((err) => console.error(err));
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Editar tarea
      </h2>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          type="text"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          placeholder="Titulo"
          required
        />

        <textarea
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          rows={3}
          required
        />

        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 transition ease-in-out hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition ease-in-out hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </Modal>
  );
}
