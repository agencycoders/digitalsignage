import { Link } from 'react-router-dom';
import { FiMonitor, FiPieChart, FiUsers, FiZap, FiArrowRight, FiCheck } from 'react-icons/fi';

export const Home = () => {
    const features = [
        {
            name: 'Gestão de Conteúdo',
            description: 'Gerencie todo seu conteúdo digital em um só lugar, com interface intuitiva e organizada.',
            icon: FiMonitor,
        },
        {
            name: 'Análises Detalhadas',
            description: 'Acompanhe o desempenho do seu conteúdo com métricas e análises em tempo real.',
            icon: FiPieChart,
        },
        {
            name: 'Multi-usuários',
            description: 'Trabalhe em equipe com controle de permissões e colaboração em tempo real.',
            icon: FiUsers,
        },
        {
            name: 'Alta Performance',
            description: 'Sistema otimizado para entregar a melhor experiência possível aos seus usuários.',
            icon: FiZap,
        },
    ];

    const plans = [
        {
            name: 'Básico',
            price: 'R$ 99',
            description: 'Perfeito para começar',
            features: [
                'Até 100 vídeos',
                '5 usuários',
                'Análises básicas',
                'Suporte por email',
            ],
        },
        {
            name: 'Profissional',
            price: 'R$ 199',
            description: 'Para times em crescimento',
            features: [
                'Até 500 vídeos',
                '15 usuários',
                'Análises avançadas',
                'Suporte prioritário',
                'API access',
            ],
            highlighted: true,
        },
        {
            name: 'Enterprise',
            price: 'Personalizado',
            description: 'Para grandes empresas',
            features: [
                'Vídeos ilimitados',
                'Usuários ilimitados',
                'Análises customizadas',
                'Suporte 24/7',
                'API dedicada',
                'Infraestrutura dedicada',
            ],
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                    <span className="block">Gerencie seu conteúdo</span>{' '}
                                    <span className="block text-indigo-200">de forma inteligente</span>
                                </h1>
                                <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Plataforma completa para gestão de conteúdo digital. Simplifique seus processos,
                                    aumente seu alcance e monitore resultados em tempo real.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/register"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10"
                                        >
                                            Começar agora
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            to="/login"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Fazer login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 backdrop-blur-xl"></div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Recursos</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Tudo que você precisa para crescer
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Nossa plataforma oferece todas as ferramentas necessárias para você gerenciar e expandir seu conteúdo digital.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Planos para todos os tamanhos
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Escolha o plano ideal para suas necessidades
                        </p>
                    </div>

                    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                                    plan.highlighted
                                        ? 'border-2 border-indigo-500 transform scale-105'
                                        : 'border border-gray-200'
                                }`}
                            >
                                <div className="p-6">
                                    <h2 className="text-2xl leading-6 font-semibold text-gray-900">{plan.name}</h2>
                                    <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                                    <p className="mt-8">
                                        <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                        {plan.price !== 'Personalizado' && <span className="text-base font-medium text-gray-500">/mês</span>}
                                    </p>
                                    <Link
                                        to="/register"
                                        className={`mt-8 block w-full bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white ${
                                            plan.highlighted ? 'text-lg' : 'text-base'
                                        }`}
                                    >
                                        Começar agora
                                    </Link>
                                </div>
                                <div className="pt-6 pb-8 px-6">
                                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                                        O que está incluído
                                    </h3>
                                    <ul className="mt-6 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex space-x-3">
                                                <FiCheck className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                <span className="text-base text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Pronto para começar?</span>
                        <span className="block">Crie sua conta gratuitamente hoje.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Junte-se a milhares de criadores de conteúdo que já estão usando nossa plataforma.
                    </p>
                    <Link
                        to="/register"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
                    >
                        Começar agora
                        <FiArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
