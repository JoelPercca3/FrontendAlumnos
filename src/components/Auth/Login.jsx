import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { FiMail, FiLock, FiUser } from 'react-icons/fi'; // Necesitarás instalar react-icons

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const userData = { email, password };
            const result = await loginUser(userData);

            if (result.success) {
                navigate('/students');
            } else {
                setError(result.message || 'Credenciales incorrectas');
            }
        } catch (err) {
            setError('Error al conectar con el servidor');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
            <div className="animate-fade-in-up w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                    <div className="flex justify-center">
                        <FiUser className="text-white w-16 h-16 p-3 bg-white/20 rounded-full" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-white mt-4">Bienvenido de nuevo</h2>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                placeholder="Correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 ease-in-out"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg transform transition-all duration-200 ease-in-out ${
                                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:translate-y-[-1px] hover:shadow-xl'
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                </div>
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-100 text-red-600 rounded-lg text-sm text-center animate-shake">
                                {error}
                            </div>
                        )}

                        {/* Register Link */}
                        <p className="text-center text-gray-600 text-sm mt-6">
                            ¿No tienes una cuenta?{' '}
                            <button
                                onClick={() => navigate('/register')}
                                className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
                            >
                                Regístrate
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;