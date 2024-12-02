import React from 'react';
import { FiUsers, FiDollarSign, FiMonitor, FiActivity } from 'react-icons/fi';

export const AdminDashboard = () => {
  const stats = [
    {
      name: 'Total de Usuários',
      value: '2,543',
      change: '+12.5%',
      changeType: 'increase',
      icon: FiUsers,
      description: 'desde o último mês'
    },
    {
      name: 'Receita Mensal',
      value: 'R$ 45.231',
      change: '+15.2%',
      changeType: 'increase',
      icon: FiDollarSign,
      description: 'comparado ao mês anterior'
    },
    {
      name: 'TVs Ativas',
      value: '1,234',
      change: '+8.1%',
      changeType: 'increase',
      icon: FiMonitor,
      description: 'dispositivos conectados'
    },
    {
      name: 'Taxa de Engajamento',
      value: '87.2%',
      change: '+3.2%',
      changeType: 'increase',
      icon: FiActivity,
      description: 'média de visualizações'
    }
  ];

  const recentUsers = [
    { id: 1, name: 'João Silva', email: 'joao@email.com', plan: 'Premium', joinDate: '2024-01-15' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com', plan: 'Basic', joinDate: '2024-01-14' },
    { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', plan: 'Premium', joinDate: '2024-01-13' },
    { id: 4, name: 'Ana Oliveira', email: 'ana@email.com', plan: 'Basic', joinDate: '2024-01-12' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Painel Administrativo</h1>
        <p className="mt-2 text-gray-600">
          Gerencie usuários, conteúdo e monitore o desempenho da plataforma.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-indigo-50">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <span className={`ml-2 px-2.5 py-0.5 rounded-full text-sm font-medium ${
                    stat.changeType === 'increase' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Users */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Usuários Recentes</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">Ver todos</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plano
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data de Cadastro
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        user.plan === 'Premium' 
                          ? 'bg-indigo-100 text-indigo-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-indigo-600 hover:text-indigo-800 mr-3">Editar</button>
                      <button className="text-red-600 hover:text-red-800">Remover</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
