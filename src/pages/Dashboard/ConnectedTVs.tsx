import React, { useState } from 'react';

interface TV {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'error';
  lastPing: string;
  currentContent: string;
  nextContent: string;
  ipAddress: string;
  version: string;
}

export const ConnectedTVs = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedView, setSelectedView] = useState<'grid' | 'list'>('grid');

  const tvs: TV[] = [
    {
      id: '1',
      name: 'TV Recepção',
      location: 'Entrada Principal',
      status: 'online',
      lastPing: '2024-02-20T15:30:00',
      currentContent: 'Conteúdo Principal',
      nextContent: 'Promoções do Mês',
      ipAddress: '192.168.1.101',
      version: '1.2.0'
    },
    {
      id: '2',
      name: 'TV Sala de Espera',
      location: 'Piso 1',
      status: 'online',
      lastPing: '2024-02-20T15:29:00',
      currentContent: 'Comunicados Internos',
      nextContent: 'Conteúdo Principal',
      ipAddress: '192.168.1.102',
      version: '1.2.0'
    },
    {
      id: '3',
      name: 'TV Cafeteria',
      location: 'Piso 2',
      status: 'offline',
      lastPing: '2024-02-20T10:15:00',
      currentContent: '-',
      nextContent: '-',
      ipAddress: '192.168.1.103',
      version: '1.1.9'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-500 bg-green-500/10';
      case 'offline':
        return 'text-red-500 bg-red-500/10';
      case 'error':
        return 'text-yellow-500 bg-yellow-500/10';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'error':
        return 'Erro';
      default:
        return status;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">TVs Conectadas</h1>
        <div className="flex items-center space-x-4">
          <div className="flex bg-[var(--color-bg-dark)] rounded-lg p-1">
            <button
              onClick={() => setSelectedView('grid')}
              className={`p-2 rounded-lg ${
                selectedView === 'grid' ? 'bg-[var(--color-primary)] text-white' : ''
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedView('list')}
              className={`p-2 rounded-lg ${
                selectedView === 'list' ? 'bg-[var(--color-primary)] text-white' : ''
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
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
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-[var(--color-text-muted)] mb-2">Total de TVs</h3>
          <p className="text-3xl font-bold">{tvs.length}</p>
        </div>
        <div className="card p-6">
          <h3 className="text-[var(--color-text-muted)] mb-2">TVs Online</h3>
          <p className="text-3xl font-bold text-green-500">
            {tvs.filter(tv => tv.status === 'online').length}
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-[var(--color-text-muted)] mb-2">TVs Offline</h3>
          <p className="text-3xl font-bold text-red-500">
            {tvs.filter(tv => tv.status === 'offline').length}
          </p>
        </div>
      </div>

      {/* TV List */}
      {selectedView === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tvs.map((tv) => (
            <div key={tv.id} className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium mb-1">{tv.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{tv.location}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tv.status)}`}>
                  {getStatusText(tv.status)}
                </span>
              </div>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">IP:</span>
                  <span>{tv.ipAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Versão:</span>
                  <span>{tv.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Último ping:</span>
                  <span>{new Date(tv.lastPing).toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="text-sm text-[var(--color-text-muted)] mb-2">Conteúdo Atual:</p>
                <p className="mb-3">{tv.currentContent}</p>
                <p className="text-sm text-[var(--color-text-muted)] mb-2">Próximo Conteúdo:</p>
                <p>{tv.nextContent}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Local</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">IP</th>
                <th className="text-left p-4">Versão</th>
                <th className="text-left p-4">Último Ping</th>
              </tr>
            </thead>
            <tbody>
              {tvs.map((tv) => (
                <tr key={tv.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-dark)]">
                  <td className="p-4">{tv.name}</td>
                  <td className="p-4">{tv.location}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tv.status)}`}>
                      {getStatusText(tv.status)}
                    </span>
                  </td>
                  <td className="p-4">{tv.ipAddress}</td>
                  <td className="p-4">{tv.version}</td>
                  <td className="p-4">{new Date(tv.lastPing).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
                <input type="text" className="input w-full" placeholder="Ex: Entrada Principal" />
              </div>

              <div>
                <label className="block mb-2">Endereço IP</label>
                <input type="text" className="input w-full" placeholder="Ex: 192.168.1.100" />
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
  );
};
