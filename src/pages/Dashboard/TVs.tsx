import React, { useState } from 'react';
import { DashboardLayout } from '../../components/Dashboard/DashboardLayout';

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
  const [selectedTV, setSelectedTV] = useState<TV | null>(null);

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
    <DashboardLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">TVs Conectadas</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="btn btn-primary flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <button className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-yellow-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors text-red-500">
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
      </div>
    </DashboardLayout>
  );
};
