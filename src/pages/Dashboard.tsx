import { FiActivity, FiClock, FiPlayCircle, FiTrendingUp, FiUsers, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const stats = [
        { name: 'Total de Vídeos', value: '156', icon: FiVideo, change: '+12%', changeType: 'increase' },
        { name: 'Visualizações', value: '12.5k', icon: FiPlayCircle, change: '+25%', changeType: 'increase' },
        { name: 'Usuários Ativos', value: '2.3k', icon: FiUsers, change: '+8%', changeType: 'increase' },
        { name: 'Tempo Médio', value: '15:42', icon: FiClock, change: '+3%', changeType: 'increase' },
    ];

    const recentActivity = [
        { id: 1, content: 'Novo vídeo adicionado: "Introdução ao Marketing Digital"', time: '5 minutos atrás' },
        { id: 2, content: 'Playlist "Marketing Avançado" atualizada', time: '1 hora atrás' },
        { id: 3, content: 'Novo usuário registrado: Maria Silva', time: '2 horas atrás' },
        { id: 4, content: 'Vídeo "SEO Básico" atingiu 1000 visualizações', time: '3 horas atrás' },
    ];

    const popularContent = [
        { id: 1, title: 'Marketing Digital para Iniciantes', views: '2.5k', duration: '45:00' },
        { id: 2, title: 'SEO Avançado', views: '1.8k', duration: '32:15' },
        { id: 3, title: 'Estratégias de Conteúdo', views: '1.2k', duration: '28:30' },
        { id: 4, title: 'Analytics na Prática', views: '950', duration: '41:20' },
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Bem-vindo de volta! Aqui está um resumo da sua plataforma.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <Link
                        to="/content/new"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Adicionar Conteúdo
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.name}
                        className="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <stat.icon className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                                <div className="flex items-baseline">
                                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                    <p className={`ml-2 flex items-baseline text-sm font-semibold ${
                                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {stat.change}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Recent Activity */}
                <div className="bg-white shadow rounded-lg">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Atividade Recente</h2>
                            <FiActivity className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="flow-root">
                            <ul className="-mb-8">
                                {recentActivity.map((activity, activityIdx) => (
                                    <li key={activity.id}>
                                        <div className="relative pb-8">
                                            {activityIdx !== recentActivity.length - 1 ? (
                                                <span
                                                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            <div className="relative flex space-x-3">
                                                <div>
                                                    <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center ring-8 ring-white">
                                                        <FiActivity className="h-4 w-4 text-indigo-600" />
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                                    <div>
                                                        <p className="text-sm text-gray-500">{activity.content}</p>
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
                <div className="bg-white shadow rounded-lg">
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Conteúdo Popular</h2>
                            <FiTrendingUp className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200">
                                {popularContent.map((content) => (
                                    <li key={content.id} className="py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                    <FiVideo className="h-6 w-6 text-indigo-600" />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">
                                                    {content.title}
                                                </p>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <FiPlayCircle className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                    <span>{content.views} visualizações</span>
                                                    <span className="mx-2">&middot;</span>
                                                    <FiClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                                    <span>{content.duration}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <Link
                                                    to={`/content/${content.id}`}
                                                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                    Ver
                                                </Link>
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
