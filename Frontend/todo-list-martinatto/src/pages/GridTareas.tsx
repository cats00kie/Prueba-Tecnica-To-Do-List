import CardTarea from '../components/CardTarea';
import { BadgeTareas } from '../components/BadgeTareas';

export default function GridTareas() {
  return (
    <div className="m-6 mx-auto max-w-5xl rounded-2xl border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-6 flex items-center gap-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Tareas
        </h1>
        <BadgeTareas tareasPendientes={0} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CardTarea />
        <CardTarea />
        <CardTarea />
      </div>
    </div>
  );
}
