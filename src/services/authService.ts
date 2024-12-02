import api from './api';
import { User } from '../types';

interface LoginResponse {
    user: User;
    token: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const authService = {
    login: async (email: string, password: string) => {
        const response = await api.post<LoginResponse>('/auth/login', {
            email,
            password
        });
        
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        return response.data;
    },

    register: async (data: RegisterData) => {
        const response = await api.post<LoginResponse>('/auth/register', data);
        
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: (): User | null => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated: (): boolean => {
        return !!localStorage.getItem('token');
    }
};
