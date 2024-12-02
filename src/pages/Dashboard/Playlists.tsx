import React, { useState } from 'react';
import { useContentStore, type PlaylistItem } from '../../stores/contentStore';

export const Playlists = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState<Partial<PlaylistItem>>({
    title: '',
    description: '',
    status: 'draft',
    items: []
  });

  const { playlists, addPlaylist, updatePlaylist, deletePlaylist } = useContentStore();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-500/10';
      case 'scheduled':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'draft':
        return 'text-gray-500 bg-gray-500/10';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'scheduled':
        return 'Agendado';
      case 'draft':
        return 'Rascunho';
      default:
        return status;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlaylist.title && newPlaylist.status) {
      if (newPlaylist.id) {
        updatePlaylist(newPlaylist.id, {
          title: newPlaylist.title,
          description: newPlaylist.description,
          status: newPlaylist.status,
          items: newPlaylist.items
        });
      } else {
        addPlaylist(newPlaylist as Omit<PlaylistItem, 'id' | 'lastModified' | 'itemCount'>);
      }
      setNewPlaylist({
        title: '',
        description: '',
        status: 'draft',
        items: []
      });
      setShowCreateModal(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Playlists</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn btn-primary flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Nova Playlist</span>
        </button>
      </div>

      {/* Playlists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="card p-6 hover:scale-105 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium">{playlist.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(playlist.status)}`}>
                {getStatusText(playlist.status)}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Itens:</span>
                <span>{playlist.itemCount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Duração:</span>
                <span>{playlist.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-text-muted)]">Modificado:</span>
                <span>{new Date(playlist.lastModified).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => {
                  setNewPlaylist({ ...playlist });
                  setShowCreateModal(true);
                }}
                className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-blue-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button 
                onClick={() => deletePlaylist(playlist.id)}
                className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-red-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Playlist Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {newPlaylist.id ? 'Editar Playlist' : 'Nova Playlist'}
              </h2>
              <button onClick={() => setShowCreateModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2">Nome da Playlist</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  placeholder="Digite o nome da playlist"
                  value={newPlaylist.title}
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Descrição</label>
                <textarea 
                  className="input w-full h-24" 
                  placeholder="Digite uma descrição para a playlist"
                  value={newPlaylist.description}
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, description: e.target.value })}
                ></textarea>
              </div>

              <div>
                <label className="block mb-2">Status</label>
                <select 
                  className="input w-full"
                  value={newPlaylist.status}
                  onChange={(e) => setNewPlaylist({ ...newPlaylist, status: e.target.value as PlaylistItem['status'] })}
                >
                  <option value="draft">Rascunho</option>
                  <option value="active">Ativo</option>
                  <option value="scheduled">Agendado</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  {newPlaylist.id ? 'Salvar' : 'Criar Playlist'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
