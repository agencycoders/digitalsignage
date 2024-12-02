import api from './api';
import { Content, Playlist } from '../types';

export const contentService = {
    async getContents(): Promise<Content[]> {
        const response = await api.get('/contents');
        return response.data;
    },

    async getContentById(id: string): Promise<Content> {
        const response = await api.get(`/contents/${id}`);
        return response.data;
    },

    async createContent(content: Omit<Content, 'id' | 'createdAt'>): Promise<Content> {
        const response = await api.post('/contents', content);
        return response.data;
    },

    async updateContent(id: string, content: Partial<Content>): Promise<Content> {
        const response = await api.put(`/contents/${id}`, content);
        return response.data;
    },

    async deleteContent(id: string): Promise<void> {
        await api.delete(`/contents/${id}`);
    },

    async getPlaylists(): Promise<Playlist[]> {
        const response = await api.get('/playlists');
        return response.data;
    },

    async createPlaylist(playlist: Omit<Playlist, 'id' | 'createdAt'>): Promise<Playlist> {
        const response = await api.post('/playlists', playlist);
        return response.data;
    },

    async updatePlaylist(id: string, playlist: Partial<Playlist>): Promise<Playlist> {
        const response = await api.put(`/playlists/${id}`, playlist);
        return response.data;
    },

    async deletePlaylist(id: string): Promise<void> {
        await api.delete(`/playlists/${id}`);
    },

    async uploadMedia(file: File): Promise<{ url: string }> {
        const formData = new FormData();
        formData.append('file', file);
        const response = await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
};
