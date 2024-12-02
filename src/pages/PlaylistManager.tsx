import { useState, useEffect } from 'react';
import { PlaylistEditor } from '../components/Playlist/PlaylistEditor';
import { Playlist } from '../types';
import { playlistService } from '../services/playlistService';
import { toast } from 'react-toastify';

export const PlaylistManager = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPlaylists();
    }, []);

    const loadPlaylists = async () => {
        try {
            setLoading(true);
            const data = await playlistService.getAllPlaylists();
            setPlaylists(data);
        } catch (error) {
            toast.error('Erro ao carregar playlists');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePlaylist = async () => {
        try {
            const newPlaylist: Omit<Playlist, 'id'> = {
                name: 'Nova Playlist',
                userId: '1', // Obter do contexto de autenticação
                items: [],
                createdAt: new Date(),
                updatedAt: new Date(),
                status: 'draft',
                displaySettings: {
                    resolution: {
                        width: 1920,
                        height: 1080
                    },
                    aspectRatio: '16:9',
                    backgroundColor: '#000000',
                    loop: true,
                    autoPlay: true
                }
            };

            const created = await playlistService.createPlaylist(newPlaylist);
            setPlaylists(current => [...current, created]);
            setSelectedPlaylist(created);
            toast.success('Playlist criada com sucesso!');
        } catch (error) {
            toast.error('Erro ao criar playlist');
            console.error(error);
        }
    };

    const handleSavePlaylist = async (updatedPlaylist: Playlist) => {
        try {
            await playlistService.updatePlaylist(updatedPlaylist.id, updatedPlaylist);
            setPlaylists(current =>
                current.map(playlist =>
                    playlist.id === updatedPlaylist.id ? updatedPlaylist : playlist
                )
            );
            toast.success('Playlist atualizada com sucesso!');
        } catch (error) {
            toast.error('Erro ao salvar playlist');
            console.error(error);
        }
    };

    const handleDeletePlaylist = async (id: string) => {
        if (!window.confirm('Tem certeza que deseja excluir esta playlist?')) return;

        try {
            await playlistService.deletePlaylist(id);
            setPlaylists(current => current.filter(playlist => playlist.id !== id));
            if (selectedPlaylist?.id === id) {
                setSelectedPlaylist(null);
            }
            toast.success('Playlist excluída com sucesso!');
        } catch (error) {
            toast.error('Erro ao excluir playlist');
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gerenciador de Playlists</h1>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    onClick={handleCreatePlaylist}
                >
                    Nova Playlist
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {playlists.map(playlist => (
                    <div
                        key={playlist.id}
                        className={`bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow ${
                            selectedPlaylist?.id === playlist.id ? 'border-2 border-blue-500' : ''
                        }`}
                    >
                        <div 
                            className="cursor-pointer"
                            onClick={() => setSelectedPlaylist(playlist)}
                        >
                            <h3 className="font-semibold mb-2">{playlist.name}</h3>
                            <p className="text-sm text-gray-500">
                                {playlist.items.length} items • {playlist.status}
                            </p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => handleDeletePlaylist(playlist.id)}
                                className="text-red-600 hover:text-red-800 text-sm"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlaylist && (
                <PlaylistEditor
                    playlist={selectedPlaylist}
                    onSave={handleSavePlaylist}
                />
            )}
        </div>
    );
};
