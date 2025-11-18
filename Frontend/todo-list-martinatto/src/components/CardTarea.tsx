import { useEffect, useState } from 'react';
import { BiCheck, BiPencil } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import ModalEliminar from './ModalEliminar';
import ModalModificar from './ModalModificar';
import { toast } from 'sonner';

type datos = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  onConfirm: () => void;
  estado: boolean;
};

export default function CardTarea({
  id,
  titulo,
  descripcion,
  fecha,
  onConfirm,
  estado,
}: datos) {
  const [modalModificar, setModalModificar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [color, setColor] = useState('');

  useEffect(() => {
    if (estado) {
      setColor('bg-green-500/15 text-green-600 dark:text-green-400');
    } else {
      setColor('bg-yellow-500/15 text-yellow-600 dark:text-yellow-400');
    }
  }, [estado]);

  function cambiarEstado() {
    fetch(`http://localhost:3000/tareas/` + id + '/estado', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok)
          throw new Error('Error al cambiar el estado de la tarea');
        toast.success('Estado de la tarea actualizado con éxito');
        onConfirm();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="mx-auto flex w-full max-w-[300px] flex-col justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
      <div className="relative mb-6 flex items-center gap-2">
        <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {titulo}
        </h2>
        <span
          className={`rounded-full border border-transparent px-2 py-0.5 text-sm font-medium ${color}`}
        >
          {estado ? 'Completada' : 'Pendiente'}
        </span>
      </div>
      <p className="mb-3 text-sm leading-snug text-gray-600 dark:text-gray-300">
        {descripcion}
      </p>

      <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        Fecha límite: <span className="font-medium">{fecha}</span>
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setModalModificar(true)}
          className="rounded bg-blue-500 px-3 py-2 text-sm text-white transition ease-in-out hover:bg-blue-600"
        >
          <BiPencil size={16} />
        </button>

        <button
          type="button"
          onClick={() => setModalEliminar(true)}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white transition ease-in-out hover:bg-red-600"
        >
          <BsTrash size={16} />
        </button>

        <button
          type="button"
          onClick={() => cambiarEstado()}
          className="rounded bg-green-500 px-3 py-2 text-sm text-white transition ease-in-out hover:bg-green-600"
        >
          <BiCheck size={16} />
        </button>
      </div>
      {/* Edit Modal */}
      <ModalModificar
        open={modalModificar}
        tarea={{ id, titulo, descripcion, fecha }}
        onClose={() => setModalModificar(false)}
        onConfirm={onConfirm}
      />

      {/* Delete Modal */}
      <ModalEliminar
        open={modalEliminar}
        tareaId={id}
        onConfirm={onConfirm}
        onClose={() => setModalEliminar(false)}
      />
    </div>
  );
}
