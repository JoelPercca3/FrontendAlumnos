import React, { useEffect, useState } from 'react';
import { getAlumnos, deleteAlumno } from '../services/studentsService';

const StudentList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      const data = await getAlumnos();
      setAlumnos(data);
    };
    fetchAlumnos();
  }, []);

  const handleDelete = async (id) => {
    const response = await deleteAlumno(id);
    if (response) {
      setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
    } else {
      alert('Error al eliminar alumno');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Listado de Estudiantes
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-2 px-4 border">Nombre</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno) => (
                <tr key={alumno.id} className="bg-gray-50 hover:bg-gray-100">
                  <td className="py-2 px-4 border text-center">{alumno.nombre}</td>
                  <td className="py-2 px-4 border text-center">{alumno.email}</td>
                  <td className="py-2 px-4 border text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                        Notas
                      </button>
                      <button className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600">
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(alumno.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default StudentList;
