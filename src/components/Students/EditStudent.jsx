// src/components/Students/EditStudent.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateAlumno, getAlumnos } from '../services/studentsService';

const EditStudent = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumno = async () => {
      const alumnos = await getAlumnos();
      const alumno = alumnos.find((al) => al.id === parseInt(id));
      if (alumno) {
        setNombre(alumno.nombre);
        setEmail(alumno.email);
      }
    };
    fetchAlumno();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedStudent = await updateAlumno(id, nombre, email, password);
    if (updatedStudent) {
      navigate('/students');  
    } else {
      alert('Error al actualizar alumno');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditStudent;
