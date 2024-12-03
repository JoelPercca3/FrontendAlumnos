import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StudentsPage from "./pages/StudentsPage";
import EditStudent from '../components/Students/EditStudent';

const StudentsPage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Estudiantes</h1>
        <Link to="/students/add" className="bg-green-500 text-white px-4 py-2 rounded">
          Registrar Estudiante
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<EditStudent />} />
      </Routes>
    </div>
  );
};

export default StudentsPage;
