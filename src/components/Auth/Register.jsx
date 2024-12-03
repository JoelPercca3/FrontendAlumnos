import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';  // Importamos la función

// Cambiamos el nombre del componente (no puede llamarse igual que la función importada)
const Register = () => {   
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const userData = { nombre, email, password };
        // Usamos la función importada registerUser, no Register
        const result = await registerUser(userData);
        
        // Modificamos la lógica para usar la respuesta correctamente
        if (result.success) {
            navigate('/login');
        } else {
            setError(result.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                    required
                />
                <button type="submit">Register</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Register;