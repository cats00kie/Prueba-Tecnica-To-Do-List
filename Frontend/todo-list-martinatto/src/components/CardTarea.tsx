import { BiPencil } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

type datos = {
  title?: string;
  description?: string;
  deadline?: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CardTarea({
  title = 'Título de tarea',
  description = 'Descripción de la tarea...',
  deadline = '2025-12-01',
  onEdit,
  onDelete,
}: datos) {
  return (
    <div className="mx-auto flex w-full max-w-[300px] flex-col justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
      <h2 className="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>

      <p className="mb-3 text-sm leading-snug text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        Fecha límite: <span className="font-medium">{deadline}</span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="rounded bg-blue-500 px-3 py-2 text-sm text-white hover:bg-blue-600"
        >
          <BiPencil size={16} />
        </button>

        <button
          onClick={onDelete}
          className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
        >
          <BsTrash size={16} />
        </button>
      </div>
    </div>
  );
}
