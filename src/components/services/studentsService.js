import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth'; // Cambia la URL según tu backend

// Obtener todos los alumnos
export const getAlumnos = async () => {
    try {
      const response = await axios.get(`${API_URL}/alumnos`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener alumnos', error);
      return [];
    }
  };

  export const updateAlumno = async (id, nombre, email, password) => {
    try {
      const response = await axios.put(`${API_URL}/alumnos/${id}`, { nombre, email, password });
      return response.data;
    } catch (error) {
      console.error('Error al actualizar alumno', error);
      return null;
    }
  };

  export const deleteAlumno = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/alumnos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar alumno', error);
      return null;
    }
  };