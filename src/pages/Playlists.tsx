import { useState } from 'react';
import { toast } from 'react-toastify';

interface Playlist {
    id: string;
    name: string;
    description: string;
    itemCount: number;
    duration: string;
    lastModified: string;
}

export const Playlists = () => {
    const [playlists, setPlaylists] = useState<Playlist[]>([
        {
            id: '1',
            name: 'Conteúdo Principal',
            description: 'Playlist principal com conteúdos institucionais',
            itemCount: 12,
            duration: '2h 30min',
            lastModified: '2024-01-15'
        },
        {
            id: '2',
            name: 'Promoções',
            description: 'Conteúdos promocionais e ofertas especiais',
            itemCount: 8,
            duration: '1h 45min',
            lastModified: '2024-01-14'
        },
        {
            id: '3',
            name: 'Notícias',
            description: 'Atualizações e notícias da empresa',
            itemCount: 15,
            duration: '3h 15min',
            lastModified: '2024-01-13'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [newPlaylist, setNewPlaylist] = useState({ name: '', description: '' });

    const handleCreatePlaylist = () => {
        if (!newPlaylist.name.trim()) {
            toast.error('O nome da playlist é obrigatório');
            return;
        }

        const playlist: Playlist = {
            id: String(playlists.length + 1),
            name: newPlaylist.name,
            description: newPlaylist.description,
            itemCount: 0,
            duration: '0min',
            lastModified: new Date().toISOString().split('T')[0]
        };

        setPlaylists([...playlists, playlist]);
        setNewPlaylist({ name: '', description: '' });
        setIsCreating(false);
        toast.success('Playlist criada com sucesso!');
    };

    const handleDeletePlaylist = (id: string) => {
        setPlaylists(playlists.filter(playlist => playlist.id !== id));
        toast.success('Playlist excluída com sucesso!');
    };

    const filteredPlaylists = playlists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Playlists</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            Gerencie suas playlists e organize seu conteúdo
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button
                            onClick={() => setIsCreating(true)}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <svg
                                className="-ml-1 mr-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Nova Playlist
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="mt-8">
                    <div className="relative rounded-md shadow-sm">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pr-10 sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Buscar playlists..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Playlists Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPlaylists.map((playlist) => (
                        <div
                            key={playlist.id}
                            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {playlist.name}
                                    </h3>
                                    <button
                                        onClick={() => handleDeletePlaylist(playlist.id)}
                                        className="text-gray-400 hover:text-red-500"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">{playlist.description}</p>
                                <div className="mt-4 flex justify-between text-sm text-gray-500">
                                    <div>
                                        <span>{playlist.itemCount} itens</span>
                                        <span className="mx-2">•</span>
                                        <span>{playlist.duration}</span>
                                    </div>
                                    <div>
                                        <span>Modificado em {playlist.lastModified}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-6 py-4">
                                <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                    Gerenciar conteúdo →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Playlist Modal */}
                {isCreating && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div
                                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                                onClick={() => setIsCreating(false)}
                            ></div>

                            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Criar nova playlist
                                    </h3>
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            value={newPlaylist.name}
                                            onChange={(e) =>
                                                setNewPlaylist({ ...newPlaylist, name: e.target.value })
                                            }
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Nome da playlist"
                                        />
                                        <textarea
                                            value={newPlaylist.description}
                                            onChange={(e) =>
                                                setNewPlaylist({
                                                    ...newPlaylist,
                                                    description: e.target.value
                                                })
                                            }
                                            className="mt-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            placeholder="Descrição (opcional)"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                    <button
                                        type="button"
                                        onClick={handleCreatePlaylist}
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                                    >
                                        Criar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsCreating(false)}
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
