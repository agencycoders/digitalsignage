import React, { useState } from 'react';
import { useContentStore, type ContentItem } from '../../stores/contentStore';

export const Library = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'image' | 'text'>('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newContent, setNewContent] = useState<Partial<ContentItem>>({
    type: 'video',
    title: '',
    duration: ''
  });

  const { contentItems, addContentItem, deleteContentItem } = useContentStore();

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab);

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'video', label: 'Vídeos' },
    { id: 'image', label: 'Imagens' },
    { id: 'text', label: 'Textos' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContent.title && newContent.type && newContent.duration) {
      addContentItem(newContent as Omit<ContentItem, 'id' | 'dateCreated'>);
      setNewContent({ type: 'video', title: '', duration: '' });
      setShowUploadModal(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Biblioteca de Conteúdo</h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Adicionar Conteúdo</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-[var(--color-primary)] text-white'
                : 'hover:bg-[var(--color-bg-light)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="card p-4 hover:scale-105 transition-transform">
            <div className="aspect-video bg-[var(--color-bg-dark)] rounded-lg mb-4 flex items-center justify-center">
              {item.type === 'video' && (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
              {item.type === 'image' && (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
              {item.type === 'text' && (
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{item.title}</h3>
              <button 
                onClick={() => deleteContentItem(item.id)}
                className="text-[var(--color-text-muted)] hover:text-red-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div className="flex justify-between text-sm text-[var(--color-text-muted)]">
              <span>Duração: {item.duration}</span>
              <span>{new Date(item.dateCreated).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Adicionar Novo Conteúdo</h2>
              <button onClick={() => setShowUploadModal(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2">Tipo de Conteúdo</label>
                <select 
                  className="input w-full"
                  value={newContent.type}
                  onChange={(e) => setNewContent({ ...newContent, type: e.target.value as ContentItem['type'] })}
                >
                  <option value="video">Vídeo</option>
                  <option value="image">Imagem</option>
                  <option value="text">Texto</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Título</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  placeholder="Digite o título do conteúdo"
                  value={newContent.title}
                  onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block mb-2">Arquivo</label>
                <input type="file" className="input w-full" />
              </div>

              <div>
                <label className="block mb-2">Duração (em segundos)</label>
                <input 
                  type="text" 
                  className="input w-full" 
                  placeholder="Ex: 30s"
                  value={newContent.duration}
                  onChange={(e) => setNewContent({ ...newContent, duration: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="btn btn-secondary"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
