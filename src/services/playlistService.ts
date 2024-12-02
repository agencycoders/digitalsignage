import api from './api';
import { Playlist, PlaylistItem } from '../types';

export const playlistService = {
    // Listar todas as playlists
    getAllPlaylists: async () => {
        const response = await api.get<Playlist[]>('/playlists');
        return response.data;
    },

    // Obter uma playlist específica
    getPlaylistById: async (id: string) => {
        const response = await api.get<Playlist>(`/playlists/${id}`);
        return response.data;
    },

    // Criar nova playlist
    createPlaylist: async (playlist: Omit<Playlist, 'id'>) => {
        const response = await api.post<Playlist>('/playlists', playlist);
        return response.data;
    },

    // Atualizar playlist existente
    updatePlaylist: async (id: string, playlist: Partial<Playlist>) => {
        const response = await api.put<Playlist>(`/playlists/${id}`, playlist);
        return response.data;
    },

    // Excluir playlist
    deletePlaylist: async (id: string) => {
        await api.delete(`/playlists/${id}`);
    },

    // Adicionar item à playlist
    addPlaylistItem: async (playlistId: string, item: Omit<PlaylistItem, 'id'>) => {
        const response = await api.post<PlaylistItem>(`/playlists/${playlistId}/items`, item);
        return response.data;
    },

    // Remover item da playlist
    removePlaylistItem: async (playlistId: string, itemId: string) => {
        await api.delete(`/playlists/${playlistId}/items/${itemId}`);
    },

    // Atualizar ordem dos itens
    updateItemsOrder: async (playlistId: string, items: { id: string; order: number }[]) => {
        const response = await api.put(`/playlists/${playlistId}/items/order`, { items });
        return response.data;
    }
};
