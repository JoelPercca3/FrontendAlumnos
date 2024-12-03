// src/components/Students/StudentList.jsx
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
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} - {alumno.email} 
            <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
