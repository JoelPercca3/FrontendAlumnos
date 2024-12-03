import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { FiUser, FiMail, FiLock } from 'react-icons/fi'; // Importamos los íconos necesarios

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = { nombre, email, password };
        const result = await registerUser(userData);

        if (result.success) {
            navigate('/login');
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">Crear Cuenta</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                            Nombre
                        </label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                <FiUser className="h-5 w-5" />
                            </span>
                            <input
                                type="text"
                                id="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Ingresa tu nombre"
                                required
                                className="block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    {/* Correo Electrónico */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electrónico
                        </label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                <FiMail className="h-5 w-5" />
                            </span>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Ingresa tu correo"
                                required
                                className="block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    {/* Contraseña */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <div className="mt-1 relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                <FiLock className="h-5 w-5" />
                            </span>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Crea una contraseña"
                                required
                                className="block w-full p-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    {/* Mensaje de error */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">
                            {error}
                        </p>
                    )}
                    {/* Botón de registro */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                {/* Redirección a login */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    ¿Ya tienes una cuenta?{' '}
                    <a
                        href="/login"
                        className="text-indigo-600 hover:underline"
                    >
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
