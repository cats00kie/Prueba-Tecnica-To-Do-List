interface BadgeTareasDatos {
  tareasPendientes: number;
}

export function BadgeTareas({ tareasPendientes }: BadgeTareasDatos) {
  let color = '';

  if (tareasPendientes === 0) {
    color = 'bg-green-500/15 text-green-600 dark:text-green-400';
  } else if (tareasPendientes > 0 && tareasPendientes < 5) {
    color = 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400';
  } else {
    color = 'bg-red-500/15 text-red-600 dark:text-red-400';
  }

  return (
    <span
      className={`rounded-full border border-transparent px-2 py-0.5 text-sm font-medium ${color}`}
    >
      {tareasPendientes} pendientes
    </span>
  );
}
