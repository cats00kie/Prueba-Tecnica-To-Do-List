import { toast } from 'sonner';
import Modal from './Modal';

interface ModalEliminarProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tareaId: string;
}

export default function ModalEliminar({
  open,
  onClose,
  onConfirm,
  tareaId,
}: ModalEliminarProps) {
  function eliminar(tareaId: string) {
    fetch(`http://localhost:3000/tareas/${tareaId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al eliminar la tarea');
        onConfirm();
        toast.success('Tarea eliminada con éxito');
        onClose();
      })
      .catch((err) => console.error(err));
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        ¿Eliminar tarea?
      </h2>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Esta acción no se puede deshacer.
      </p>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg bg-gray-300 px-4 py-2 text-gray-900 transition ease-in-out hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
        >
          Cancelar
        </button>

        <button
          type="button"
          onClick={() => {
            eliminar(tareaId);
          }}
          className="rounded-lg bg-red-600 px-4 py-2 text-white transition ease-in-out hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </Modal>
  );
}
