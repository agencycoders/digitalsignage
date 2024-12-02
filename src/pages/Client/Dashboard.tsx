import React from 'react';
import { FiActivity, FiClock, FiPlayCircle, FiTrendingUp, FiUsers, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ClientDashboard = () => {
    const stats = [
        { 
            name: 'Meus Vídeos', 
            value: '24', 
            icon: FiVideo, 
            change: '+3', 
            changeType: 'increase',
            description: 'últimos 30 dias'
        },
        { 
            name: 'Visualizações', 
            value: '1.2k', 
            icon: FiPlayCircle, 
            change: '+15%', 
            changeType: 'increase',
            description: 'este mês'
        },
        { 
            name: 'TVs Conectadas', 
            value: '5', 
            icon: FiUsers, 
            change: '+2', 
            changeType: 'increase',
            description: 'dispositivos ativos'
        },
        { 
            name: 'Tempo de Exibição', 
            value: '142h', 
            icon: FiClock, 
            change: '+12h', 
            changeType: 'increase',
            description: 'este mês'
        },
    ];

    const recentActivity = [
        { id: 1, content: 'Novo vídeo adicionado: "Promoção de Verão"', time: '5 minutos atrás', type: 'video' },
        { id: 2, content: 'TV "Vitrine Principal" conectada', time: '1 hora atrás', type: 'tv' },
        { id: 3, content: 'Playlist "Ofertas" atualizada', time: '2 horas atrás', type: 'playlist' },
        { id: 4, content: 'Nova programação definida', time: '3 horas atrás', type: 'schedule' },
    ];

    const popularContent = [
        { id: 1, title: 'Promoção de Verão', views: '450', duration: '00:30', thumbnail: '🌞' },
        { id: 2, title: 'Novos Produtos', views: '380', duration: '00:45', thumbnail: '🆕' },
        { id: 3, title: 'Ofertas da Semana', views: '320', duration: '00:20', thumbnail: '🏷️' },
        { id: 4, title: 'Lançamentos', views: '290', duration: '00:35', thumbnail: '🚀' },
    ];

    return (
        <div className="space-y-8 p-6 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-indigo-700 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                <div>
                    <h1 className="text-3xl font-bold">Meu Painel</h1>
                    <p className="mt-2 text-indigo-100">
                        Gerencie seu conteúdo digital e monitore o desempenho.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link
                        to="/dashboard/content/new"
                        className="inline-flex items-center px-6 py-3 border border-transparent rounded-xl text-sm font-medium text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        <FiVideo className="mr-2 h-5 w-5" />
                        Adicionar Conteúdo
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.name}
                        className="transform hover:scale-105 transition-all duration-200 bg-white rounded-xl overflow-hidden hover:shadow-xl border border-gray-100"
                    >
                        <div className="p-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 p-3 bg-indigo-50 rounded-xl">
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
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Atividade Recente</h2>
                            <span className="p-2 bg-indigo-50 rounded-lg">
                                <FiActivity className="h-5 w-5 text-indigo-600" />
                            </span>
                        </div>
                        <div className="flow-root">
                            <ul className="-mb-8">
                                {recentActivity.map((activity, activityIdx) => (
                                    <li key={activity.id}>
                                        <div className="relative pb-8">
                                            {activityIdx !== recentActivity.length - 1 && (
                                                <span
                                                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"
                                                />
                                            )}
                                            <div className="relative flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <span className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                                                        {activity.type === 'video' && <FiVideo className="h-5 w-5 text-indigo-600" />}
                                                        {activity.type === 'playlist' && <FiPlayCircle className="h-5 w-5 text-indigo-600" />}
                                                        {activity.type === 'tv' && <FiUsers className="h-5 w-5 text-indigo-600" />}
                                                        {activity.type === 'schedule' && <FiClock className="h-5 w-5 text-indigo-600" />}
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1 flex justify-between">
                                                    <div>
                                                        <p className="text-sm text-gray-600">{activity.content}</p>
                                                    </div>
                                                    <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                        {activity.time}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Popular Content */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Conteúdo Popular</h2>
                            <span className="p-2 bg-indigo-50 rounded-lg">
                                <FiTrendingUp className="h-5 w-5 text-indigo-600" />
                            </span>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-100">
                                {popularContent.map((content) => (
                                    <li key={content.id} className="py-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                                        <div className="flex items-center space-x-4 px-4">
                                            <div className="flex-shrink-0">
                                                <span className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center text-2xl">
                                                    {content.thumbnail}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {content.title}
                                                </p>
                                                <div className="flex items-center mt-1">
                                                    <FiPlayCircle className="h-4 w-4 text-gray-400 mr-1" />
                                                    <span className="text-sm text-gray-500 mr-4">{content.views} views</span>
                                                    <FiClock className="h-4 w-4 text-gray-400 mr-1" />
                                                    <span className="text-sm text-gray-500">{content.duration}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="p-2 hover:bg-indigo-50 rounded-lg transition-colors duration-150">
                                                    <FiPlayCircle className="h-5 w-5 text-indigo-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
