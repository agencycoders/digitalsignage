import { create } from 'zustand';
import { User, Content, Playlist } from '../types';

interface Store {
    user: User | null;
    contents: Content[];
    playlists: Playlist[];
    setUser: (user: User | null) => void;
    setContents: (contents: Content[]) => void;
    setPlaylists: (playlists: Playlist[]) => void;
    addContent: (content: Content) => void;
    removeContent: (contentId: string) => void;
    addPlaylist: (playlist: Playlist) => void;
    removePlaylist: (playlistId: string) => void;
    updatePlaylist: (playlistId: string, updates: Partial<Playlist>) => void;
    login: (email: string, password: string) => Promise<void>;
}

export const useStore = create<Store>((set) => ({
    user: null,
    contents: [],
    playlists: [],
    setUser: (user) => set({ user }),
    setContents: (contents) => set({ contents }),
    setPlaylists: (playlists) => set({ playlists }),
    addContent: (content) =>
        set((state) => ({
            contents: [...state.contents, content]
        })),
    removeContent: (contentId) =>
        set((state) => ({
            contents: state.contents.filter((content) => content.id !== contentId)
        })),
    addPlaylist: (playlist) =>
        set((state) => ({
            playlists: [...state.playlists, playlist]
        })),
    removePlaylist: (playlistId) =>
        set((state) => ({
            playlists: state.playlists.filter((playlist) => playlist.id !== playlistId)
        })),
    updatePlaylist: (playlistId, updates) =>
        set((state) => ({
            playlists: state.playlists.map((playlist) =>
                playlist.id === playlistId ? { ...playlist, ...updates } : playlist
            )
        })),
    login: async (email: string, password: string) => {
        // Simulando uma chamada de API
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        // Mock de usuário para teste
        const mockUser: User = {
            id: '1',
            name: 'Usuário Teste',
            email: email
        };
        
        set({ user: mockUser });
    }
}));
