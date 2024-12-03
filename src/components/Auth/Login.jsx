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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600">
            <div className="w-full max-w-md bg-blue-900/50 backdrop-blur-md rounded-xl shadow-lg p-8">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <FiUser className="text-blue-200 bg-blue-700 rounded-full p-3 w-20 h-20" />
                    <h2 className="text-2xl font-bold text-blue-200 mt-4">Inicio de Sesión</h2>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Field */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-blue-300" />
                        </div>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full pl-12 pr-4 py-3 bg-blue-800 text-blue-200 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiLock className="h-5 w-5 text-blue-300" />
                        </div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full pl-12 pr-4 py-3 bg-blue-800 text-blue-200 border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-blue-300 text-sm">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-500 bg-blue-700 border-blue-500 focus:ring-blue-400"
                            />
                            <span className="ml-2">Recordarme</span>
                        </label>
                        <button
                            type="button"
                            className="hover:underline focus:outline-none"
                        >
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold shadow-md transition-all duration-200 ease-in-out ${
                            isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
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
                        <div className="mt-4 p-3 bg-red-500/80 text-white text-center rounded-lg animate-shake">
                            {error}
                        </div>
                    )}

                    {/* Register Link */}
                    <p className="text-center text-blue-200 mt-6">
                        ¿No tienes una cuenta?{' '}
                        <button
                            onClick={() => navigate('/register')}
                            className="text-blue-400 font-semibold hover:underline"
                        >
                            Regístrate
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
