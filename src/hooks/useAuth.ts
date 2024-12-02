import { useStore } from '../store/useStore';

export const useAuth = () => {
    const { user, setUser } = useStore();

    const logout = () => {
        setUser(null);
    };

    return {
        user,
        logout
    };
};
