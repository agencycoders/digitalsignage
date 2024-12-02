import React, { useState } from 'react';

interface TV {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
  currentPlaylist: string;
  lastPing: string;
  resolution: string;
  storage: {
    total: number;
    used: number;
  };
}

export const TVs = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTV, setSelectedTV] = useState<TV | null>(null);

  const handleEdit = (tv: TV) => {
    setSelectedTV(tv);
    setShowEditModal(true);
  };

  const handleConfig = (tv: TV) => {
    setSelectedTV(tv);
    setShowConfigModal(true);
  };

  const handleDelete = (tv: TV) => {
    setSelectedTV(tv);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    console.log('Deletando TV:', selectedTV?.id);
    setShowDeleteModal(false);
    setSelectedTV(null);
  };

  const tvs: TV[] = [
    {
      id: '1',
      name: 'TV Recepção',
      location: 'Recepção Principal',
      status: 'online',
      currentPlaylist: 'Conteúdo Principal',
      lastPing: '2024-01-20T14:30:00',
      resolution: '1920x1080',
      storage: {
        total: 32,
        used: 18,
      },
    },
    {
      id: '2',
      name: 'TV Sala de Espera',
      location: 'Sala de Espera',
      status: 'online',
      currentPlaylist: 'Promoções do Mês',
      lastPing: '2024-01-20T14:29:00',
      resolution: '1920x1080',
      storage: {
        total: 32,
        used: 15,
      },
    },
    {
      id: '3',
      name: 'TV Corredor',
      location: 'Corredor Principal',
      status: 'maintenance',
      currentPlaylist: 'Institucional',
      lastPing: '2024-01-20T12:00:00',
      resolution: '1920x1080',
      storage: {
        total: 32,
        used: 22,
      },
    },
  ];

  const getStatusColor = (status: TV['status']) => {
    switch (status) {
      case 'online':
        return 'bg-green-500/20 text-green-500';
      case 'offline':
        return 'bg-red-500/20 text-red-500';
      case 'maintenance':
        return 'bg-yellow-500/20 text-yellow-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  const getStatusText = (status: TV['status']) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'maintenance':
        return 'Manutenção';
      default:
        return status;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">TVs Conectadas</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Adicionar TV</span>
        </button>
      </div>

      {/* TV Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tvs.map((tv) => (
          <div key={tv.id} className="card p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-medium text-lg mb-1">{tv.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{tv.location}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(tv.status)}`}>
                {getStatusText(tv.status)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div>
                <p className="text-[var(--color-text-muted)] mb-1">Playlist Atual</p>
                <p>{tv.currentPlaylist}</p>
              </div>
              <div>
                <p className="text-[var(--color-text-muted)] mb-1">Última Atualização</p>
                <p>{new Date(tv.lastPing).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[var(--color-text-muted)] mb-1">Resolução</p>
                <p>{tv.resolution}</p>
              </div>
              <div>
                <p className="text-[var(--color-text-muted)] mb-1">Armazenamento</p>
                <p>{tv.storage.used}GB / {tv.storage.total}GB</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => handleEdit(tv)}
                className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-blue-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button
                onClick={() => handleConfig(tv)}
                className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-yellow-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(tv)}
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

      {/* Add TV Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Adicionar Nova TV</h2>
              <button onClick={() => setShowAddModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2">Nome da TV</label>
                <input type="text" className="input w-full" placeholder="Ex: TV Recepção" />
              </div>

              <div>
                <label className="block mb-2">Localização</label>
                <input type="text" className="input w-full" placeholder="Ex: Recepção Principal" />
              </div>

              <div>
                <label className="block mb-2">Resolução</label>
                <select className="input w-full">
                  <option value="1920x1080">1920x1080 (Full HD)</option>
                  <option value="3840x2160">3840x2160 (4K)</option>
                  <option value="1280x720">1280x720 (HD)</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Playlist Inicial</label>
                <select className="input w-full">
                  <option value="">Selecione uma playlist...</option>
                  <option value="1">Conteúdo Principal</option>
                  <option value="2">Promoções do Mês</option>
                  <option value="3">Institucional</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn btn-outline"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Adicionar TV
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit TV Modal */}
      {showEditModal && selectedTV && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Editar TV</h2>
              <button onClick={() => setShowEditModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2">Nome da TV</label>
                <input
                  type="text"
                  className="input w-full"
                  defaultValue={selectedTV.name}
                />
              </div>

              <div>
                <label className="block mb-2">Localização</label>
                <input
                  type="text"
                  className="input w-full"
                  defaultValue={selectedTV.location}
                />
              </div>

              <div>
                <label className="block mb-2">Resolução</label>
                <select className="input w-full" defaultValue={selectedTV.resolution}>
                  <option value="1920x1080">1920x1080 (Full HD)</option>
                  <option value="3840x2160">3840x2160 (4K)</option>
                  <option value="1280x720">1280x720 (HD)</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="btn btn-outline"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Config TV Modal */}
      {showConfigModal && selectedTV && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Configurações da TV</h2>
              <button onClick={() => setShowConfigModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2">Playlist Atual</label>
                <select className="input w-full" defaultValue={selectedTV.currentPlaylist}>
                  <option value="Conteúdo Principal">Conteúdo Principal</option>
                  <option value="Promoções do Mês">Promoções do Mês</option>
                  <option value="Institucional">Institucional</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Status</label>
                <select className="input w-full" defaultValue={selectedTV.status}>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="maintenance">Manutenção</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Limite de Armazenamento (GB)</label>
                <input
                  type="number"
                  className="input w-full"
                  defaultValue={selectedTV.storage.total}
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="btn btn-outline"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Salvar Configurações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete TV Modal */}
      {showDeleteModal && selectedTV && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Confirmar Exclusão</h2>
              <button onClick={() => setShowDeleteModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <p className="text-center">
                Tem certeza que deseja excluir a TV "{selectedTV.name}"?
                <br />
                <span className="text-sm text-[var(--color-text-muted)]">
                  Esta ação não pode ser desfeita.
                </span>
              </p>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="btn btn-outline"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="btn bg-red-600 hover:bg-red-700 text-white"
              >
                Excluir TV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
