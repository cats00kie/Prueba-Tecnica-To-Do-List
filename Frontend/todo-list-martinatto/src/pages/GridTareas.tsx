import CardTarea from '../components/CardTarea';
import { BadgeTareas } from '../components/BadgeTareas';
import { BiPlus } from 'react-icons/bi';
import ModalAgregar from '../components/ModalAgregar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  estado: boolean;
}

export default function GridTareas() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [modalAgregar, setModalAgregar] = useState(false);
  const usuarioId = localStorage.getItem('usuarioId') || '';
  const navigate = useNavigate();
  const apiKey = localStorage.getItem('apiKey');

  async function fetchTareas() {
    fetch('http://localhost:3000/tareas', {
      headers: {
        'Content-Type': 'application/json',
        usuarioId: usuarioId,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al obtener las tareas');
        return response.json();
      })
      .then((data) => {
        setTareas(data);
      })
      .catch((err) => console.error(err));
  }
  async function validarToken() {
    try {
      const response = await fetch('http://localhost:3000/auth/validarToken', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': apiKey ?? '',
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return { esValido: false };
    }
  }

  useEffect(() => {
    const tokenValido = async () => {
      const retorno = await validarToken();
      if (!retorno) {
        navigate('/login');
      } else {
        fetchTareas();
      }
    };

    tokenValido();
  }, []);

  return (
    <div className="m-6 mx-auto max-w-5xl rounded-2xl border border-gray-300 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="relative mb-6 flex items-center gap-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Tareas
        </h1>
        <BadgeTareas
          tareasPendientes={tareas.filter((t) => !t.estado).length}
        />
        <button
          type="button"
          onClick={() => setModalAgregar(true)}
          className="absolute top-0 right-0 flex items-center gap-1 rounded bg-green-600 px-3 py-2 text-sm text-white transition ease-in-out hover:bg-green-800"
        >
          Agregar <BiPlus size={16} />
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tareas.map((tarea) => (
          <CardTarea
            key={tarea.id}
            id={tarea.id}
            titulo={tarea.titulo}
            descripcion={tarea.descripcion}
            fecha={tarea.fecha.slice(0, 10)}
            onConfirm={fetchTareas}
            estado={tarea.estado}
          />
        ))}
      </div>
      <ModalAgregar
        open={modalAgregar}
        onClose={() => setModalAgregar(false)}
        onCreate={fetchTareas}
      />
    </div>
  );
}
