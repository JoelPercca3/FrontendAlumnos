import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const loginUser = async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || 'Error al iniciar sesión' };
    }
};

export const registerUser = async ({ nombre, email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { nombre, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || 'Error al registrar' };
    }
};
