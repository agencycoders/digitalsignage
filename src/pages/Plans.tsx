import { useState } from 'react';
import { toast } from 'react-toastify';

export const Plans = () => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const plans = [
        {
            id: 'basic',
            name: 'Básico',
            description: 'Ideal para pequenos negócios',
            price: billingCycle === 'monthly' ? 99 : 990,
            features: [
                'Até 5 telas',
                'Armazenamento básico',
                'Suporte por email',
                'Relatórios mensais'
            ]
        },
        {
            id: 'pro',
            name: 'Profissional',
            description: 'Para negócios em crescimento',
            price: billingCycle === 'monthly' ? 199 : 1990,
            features: [
                'Até 15 telas',
                'Armazenamento premium',
                'Suporte prioritário',
                'Relatórios semanais',
                'Recursos avançados'
            ]
        },
        {
            id: 'enterprise',
            name: 'Empresarial',
            description: 'Para grandes operações',
            price: billingCycle === 'monthly' ? 399 : 3990,
            features: [
                'Telas ilimitadas',
                'Armazenamento ilimitado',
                'Suporte 24/7',
                'Relatórios em tempo real',
                'API personalizada',
                'Gerente de conta dedicado'
            ]
        }
    ];

    const handleSelectPlan = (planId: string) => {
        setSelectedPlan(planId);
        toast.success('Plano selecionado com sucesso!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Escolha o plano ideal para seu negócio
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Todos os planos incluem nossa plataforma completa de gerenciamento de conteúdo
                    </p>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="mt-12 flex justify-center">
                    <div className="relative bg-white rounded-lg p-0.5 flex sm:mt-8">
                        <button
                            type="button"
                            className={`${
                                billingCycle === 'monthly'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-500'
                            } relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto transition-all duration-200`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Mensal
                        </button>
                        <button
                            type="button"
                            className={`${
                                billingCycle === 'yearly'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-500'
                            } ml-0.5 relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto transition-all duration-200`}
                            onClick={() => setBillingCycle('yearly')}
                        >
                            Anual
                            <span className="absolute -top-3 -right-12 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                                -20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`rounded-lg shadow-lg divide-y divide-gray-200 bg-white transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                                selectedPlan === plan.id ? 'ring-2 ring-blue-600' : ''
                            }`}
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                                <p className="mt-8">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        R$ {plan.price}
                                    </span>
                                    <span className="text-base font-medium text-gray-500">
                                        /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                                    </span>
                                </p>
                                <button
                                    onClick={() => handleSelectPlan(plan.id)}
                                    className={`mt-8 block w-full bg-blue-600 text-white rounded-md py-3 px-6 text-center font-medium hover:bg-blue-700 transition-colors ${
                                        selectedPlan === plan.id
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : ''
                                    }`}
                                >
                                    {selectedPlan === plan.id ? 'Plano Selecionado' : 'Selecionar Plano'}
                                </button>
                            </div>
                            <div className="pt-6 pb-8 px-6">
                                <h4 className="text-sm font-medium text-gray-900 tracking-wide">
                                    O que está incluído
                                </h4>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex space-x-3">
                                            <svg
                                                className="flex-shrink-0 h-5 w-5 text-green-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="text-sm text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg px-6 py-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Perguntas Frequentes
                    </h3>
                    <dl className="space-y-6">
                        <div>
                            <dt className="text-base font-medium text-gray-900">
                                Posso trocar de plano depois?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
                            </dd>
                        </div>
                        <div>
                            <dt className="text-base font-medium text-gray-900">
                                Como funciona o período de teste?
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                                Oferecemos 14 dias de teste grátis em todos os planos.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};
