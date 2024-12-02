import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const useStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            login: async (email: string, password: string) => {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000));
                
                // For demo purposes, create a mock user
                const mockUser = {
                    id: '1',
                    name: 'Usuário Demo',
                    email: email,
                };
                
                set({ user: mockUser });
            },
            register: async (name: string, email: string, password: string) => {
                // Simulate API call
                await new Promise((resolve) => setTimeout(resolve, 1000));
                
                // For demo purposes, create a new user
                const newUser = {
                    id: Date.now().toString(),
                    name: name,
                    email: email,
                };
                
                set({ user: newUser });
            },
            logout: () => {
                set({ user: null });
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
