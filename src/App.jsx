import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StudentList from './components/Students/StudentList';
import EditStudent from './components/Students/EditStudent';
import './index.css'; // Cambia el nombre según corresponda


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;