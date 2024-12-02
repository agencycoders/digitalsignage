import React, { useState } from 'react';
import { FiUpload, FiSearch, FiEdit2, FiTrash2, FiVideo, FiImage, FiFile } from 'react-icons/fi';

interface Content {
  id: number;
  title: string;
  type: 'video' | 'image' | 'document';
  size: string;
  uploadDate: string;
  status: 'approved' | 'pending' | 'rejected';
  owner: string;
}

export const AdminContent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contents: Content[] = [
    { id: 1, title: 'Vídeo Promocional', type: 'video', size: '25MB', uploadDate: '2024-01-15', status: 'approved', owner: 'João Silva' },
    { id: 2, title: 'Banner Principal', type: 'image', size: '2MB', uploadDate: '2024-01-14', status: 'pending', owner: 'Maria Santos' },
    { id: 3, title: 'Catálogo 2024', type: 'document', size: '5MB', uploadDate: '2024-01-13', status: 'approved', owner: 'Pedro Costa' },
    { id: 4, title: 'Ofertas Semanais', type: 'video', size: '18MB', uploadDate: '2024-01-12', status: 'rejected', owner: 'Ana Oliveira' },
    { id: 5, title: 'Logo Atualizado', type: 'image', size: '1MB', uploadDate: '2024-01-11', status: 'approved', owner: 'Carlos Souza' },
  ];

  const filteredContent = contents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    content.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <FiVideo className="h-5 w-5 text-indigo-600" />;
      case 'image':
        return <FiImage className="h-5 w-5 text-green-600" />;
      case 'document':
        return <FiFile className="h-5 w-5 text-blue-600" />;
      default:
        return <FiFile className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Aprovado</span>;
      case 'pending':
        return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pendente</span>;
      case 'rejected':
        return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Rejeitado</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Conteúdo</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerencie todo o conteúdo da plataforma
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FiUpload className="mr-2 h-5 w-5" />
              Upload de Conteúdo
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Buscar conteúdo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Todos os Tipos</option>
              <option value="video">Vídeos</option>
              <option value="image">Imagens</option>
              <option value="document">Documentos</option>
            </select>
            <select className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Todos os Status</option>
              <option value="approved">Aprovados</option>
              <option value="pending">Pendentes</option>
              <option value="rejected">Rejeitados</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conteúdo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tamanho
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Proprietário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Upload
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredContent.map((content) => (
                <tr key={content.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {getTypeIcon(content.type)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{content.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 capitalize">{content.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {content.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(content.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{content.owner}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(content.uploadDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      <FiEdit2 className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
