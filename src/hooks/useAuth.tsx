import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (name: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Verificar se existe usuário no localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            // Aqui você implementaria a chamada real à API
            // Simulando uma resposta de login
            const mockUser: User = {
                id: '1',
                name: 'Usuário Teste',
                email: email,
            };

            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            // Aqui você implementaria a chamada real à API
            // Simulando um registro
            const mockUser: User = {
                id: Date.now().toString(),
                name,
                email,
            };

            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
        } catch (error) {
            console.error('Erro no registro:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
