import { create } from 'zustand';
import { mockUsers } from './data/mockUsers';

interface User {
  id: string;
  name: string;
  email: string;
  company: string;
  role: string;
  plan: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

export const useStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: localStorage.getItem('token') !== null,

  checkAuth: () => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        set({ user, isAuthenticated: true });
      } catch {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        set({ user: null, isAuthenticated: false });
      }
    }
  },

  login: async (email: string, password: string) => {
    // Simula um delay de rede
    await new Promise(resolve => setTimeout(resolve, 500));

    // Encontra o usuário nos dados mockados
    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    // Remove a senha antes de armazenar no estado
    const { password: _, ...userWithoutPassword } = user;

    // Cria um token fake
    const token = btoa(JSON.stringify({ userId: user.id, timestamp: Date.now() }));

    // Salva o token no localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    set({
      user: userWithoutPassword,
      isAuthenticated: true
    });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({
      user: null,
      isAuthenticated: false
    });
  }
}));