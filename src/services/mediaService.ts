import api from './api';
import { MediaContent } from '../types';

export const mediaService = {
    // Upload de mídia
    uploadMedia: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await api.post<MediaContent>('/media/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },

    // Listar todas as mídias
    getAllMedia: async () => {
        const response = await api.get<MediaContent[]>('/media');
        return response.data;
    },

    // Obter uma mídia específica
    getMediaById: async (id: string) => {
        const response = await api.get<MediaContent>(`/media/${id}`);
        return response.data;
    },

    // Excluir mídia
    deleteMedia: async (id: string) => {
        await api.delete(`/media/${id}`);
    },

    // Atualizar informações da mídia
    updateMedia: async (id: string, data: Partial<MediaContent>) => {
        const response = await api.put<MediaContent>(`/media/${id}`, data);
        return response.data;
    }
};
