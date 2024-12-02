import React, { useState } from 'react';

interface ScheduleItem {
  id: string;
  title: string;
  type: 'playlist' | 'content';
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  repeat: 'none' | 'daily' | 'weekly' | 'monthly';
  status: 'scheduled' | 'active' | 'completed';
  tvs: string[];
}

export const Schedule = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleItem | null>(null);

  const handleEdit = (schedule: ScheduleItem) => {
    setSelectedSchedule(schedule);
    setShowEditModal(true);
  };

  const handleDelete = (schedule: ScheduleItem) => {
    setSelectedSchedule(schedule);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // Aqui implementaremos a lógica de deleção
    console.log('Deletando agendamento:', selectedSchedule?.id);
    setShowDeleteModal(false);
    setSelectedSchedule(null);
  };

  const schedules: ScheduleItem[] = [
    {
      id: '1',
      title: 'Conteúdo Principal',
      type: 'playlist',
      startDate: '2024-02-20',
      endDate: '2024-03-20',
      startTime: '08:00',
      endTime: '18:00',
      repeat: 'daily',
      status: 'active',
      tvs: ['TV 1', 'TV 2', 'TV 3']
    },
    {
      id: '2',
      title: 'Promoção Especial',
      type: 'content',
      startDate: '2024-02-25',
      endDate: '2024-02-25',
      startTime: '09:00',
      endTime: '21:00',
      repeat: 'none',
      status: 'scheduled',
      tvs: ['TV 1']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-500/10';
      case 'scheduled':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'completed':
        return 'text-gray-500 bg-gray-500/10';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Em Execução';
      case 'scheduled':
        return 'Agendado';
      case 'completed':
        return 'Concluído';
      default:
        return status;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Agendamentos</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Novo Agendamento</span>
        </button>
      </div>

      {/* Calendar and Schedule List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mini Calendar */}
        <div className="card p-6">
          <div className="text-center mb-4">
            <h2 className="text-lg font-semibold">Calendário</h2>
            <p className="text-[var(--color-text-muted)]">
              {selectedDate?.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </p>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
              <div key={index} className="text-center text-sm py-2 text-[var(--color-text-muted)]">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, index) => (
              <button
                key={index}
                className="text-center py-2 rounded-lg hover:bg-[var(--color-bg-dark)] transition-colors"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="lg:col-span-2 space-y-4">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium mb-1">{schedule.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(schedule.status)}`}>
                    {getStatusText(schedule.status)}
                  </span>
                </div>
                <div className="relative">
                  <button 
                    onClick={() => handleEdit(schedule)}
                    className="p-2 hover:bg-[var(--color-bg-dark)] rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-[var(--color-bg)] rounded-lg shadow-lg border border-[var(--color-border)] overflow-hidden z-10">
                    <button
                      onClick={() => handleEdit(schedule)}
                      className="w-full px-4 py-2 text-left hover:bg-[var(--color-bg-dark)] transition-colors flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      <span>Editar</span>
                    </button>
                    <button
                      onClick={() => handleDelete(schedule)}
                      className="w-full px-4 py-2 text-left hover:bg-[var(--color-bg-dark)] transition-colors text-red-500 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      <span>Excluir</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-[var(--color-text-muted)] mb-1">Período</p>
                  <p>{new Date(schedule.startDate).toLocaleDateString()} - {new Date(schedule.endDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)] mb-1">Horário</p>
                  <p>{schedule.startTime} - {schedule.endTime}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)] mb-1">Repetição</p>
                  <p className="capitalize">{schedule.repeat}</p>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)] mb-1">TVs</p>
                  <p>{schedule.tvs.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Schedule Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Novo Agendamento</h2>
              <button onClick={() => setShowCreateModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2">Tipo</label>
                <select className="input w-full">
                  <option value="playlist">Playlist</option>
                  <option value="content">Conteúdo Individual</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Selecionar Playlist/Conteúdo</label>
                <select className="input w-full">
                  <option value="">Selecione...</option>
                  <option value="1">Conteúdo Principal</option>
                  <option value="2">Promoções do Mês</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Data Início</label>
                  <input type="date" className="input w-full" />
                </div>
                <div>
                  <label className="block mb-2">Data Fim</label>
                  <input type="date" className="input w-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Hora Início</label>
                  <input type="time" className="input w-full" />
                </div>
                <div>
                  <label className="block mb-2">Hora Fim</label>
                  <input type="time" className="input w-full" />
                </div>
              </div>

              <div>
                <label className="block mb-2">Repetição</label>
                <select className="input w-full">
                  <option value="none">Sem repetição</option>
                  <option value="daily">Diariamente</option>
                  <option value="weekly">Semanalmente</option>
                  <option value="monthly">Mensalmente</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">TVs</label>
                <select multiple className="input w-full h-32">
                  <option value="tv1">TV 1</option>
                  <option value="tv2">TV 2</option>
                  <option value="tv3">TV 3</option>
                </select>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Pressione Ctrl para selecionar múltiplas TVs
                </p>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="btn btn-outline"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Criar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Schedule Modal */}
      {showEditModal && selectedSchedule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Editar Agendamento</h2>
              <button onClick={() => setShowEditModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2">Tipo</label>
                <select className="input w-full" defaultValue={selectedSchedule.type}>
                  <option value="playlist">Playlist</option>
                  <option value="content">Conteúdo Individual</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Data Início</label>
                  <input 
                    type="date" 
                    className="input w-full"
                    defaultValue={selectedSchedule.startDate}
                  />
                </div>
                <div>
                  <label className="block mb-2">Data Fim</label>
                  <input 
                    type="date" 
                    className="input w-full"
                    defaultValue={selectedSchedule.endDate}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Hora Início</label>
                  <input 
                    type="time" 
                    className="input w-full"
                    defaultValue={selectedSchedule.startTime}
                  />
                </div>
                <div>
                  <label className="block mb-2">Hora Fim</label>
                  <input 
                    type="time" 
                    className="input w-full"
                    defaultValue={selectedSchedule.endTime}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Repetição</label>
                <select className="input w-full" defaultValue={selectedSchedule.repeat}>
                  <option value="none">Sem repetição</option>
                  <option value="daily">Diariamente</option>
                  <option value="weekly">Semanalmente</option>
                  <option value="monthly">Mensalmente</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">TVs</label>
                <select multiple className="input w-full h-32" defaultValue={selectedSchedule.tvs}>
                  <option value="TV 1">TV 1</option>
                  <option value="TV 2">TV 2</option>
                  <option value="TV 3">TV 3</option>
                </select>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Pressione Ctrl para selecionar múltiplas TVs
                </p>
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

      {/* Delete Schedule Modal */}
      {showDeleteModal && selectedSchedule && (
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
                Tem certeza que deseja excluir o agendamento "{selectedSchedule.title}"?
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
                Excluir Agendamento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
