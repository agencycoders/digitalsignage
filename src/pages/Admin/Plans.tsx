import React from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiCheck } from 'react-icons/fi';

interface Plan {
  id: number;
  name: string;
  price: number;
  billing: 'monthly' | 'yearly';
  features: string[];
  maxScreens: number;
  status: 'active' | 'inactive';
  subscribers: number;
}

export const AdminPlans = () => {
  const plans: Plan[] = [
    {
      id: 1,
      name: 'Basic',
      price: 29.90,
      billing: 'monthly',
      features: ['1 TV', 'HD Quality', 'Basic Support'],
      maxScreens: 1,
      status: 'active',
      subscribers: 150
    },
    {
      id: 2,
      name: 'Premium',
      price: 49.90,
      billing: 'monthly',
      features: ['3 TVs', '4K Quality', 'Priority Support', 'Analytics'],
      maxScreens: 3,
      status: 'active',
      subscribers: 280
    },
    {
      id: 3,
      name: 'Business',
      price: 99.90,
      billing: 'monthly',
      features: ['10 TVs', '4K Quality', 'Premium Support', 'Advanced Analytics', 'API Access'],
      maxScreens: 10,
      status: 'active',
      subscribers: 85
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Planos</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerencie os planos e preços da plataforma
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FiPlus className="mr-2 h-5 w-5" />
              Novo Plano
            </button>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="p-6">
              {/* Plan Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{plan.name}</h2>
                  <div className="mt-1">
                    <span className="text-3xl font-bold text-gray-900">R$ {plan.price.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm">/{plan.billing}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <FiEdit2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Plan Stats */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span className={`mt-1 inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                      plan.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {plan.status === 'active' ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Assinantes</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{plan.subscribers}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Receita Mensal</h3>
          <p className="mt-2 text-3xl font-bold text-indigo-600">R$ 25.430,00</p>
          <p className="mt-1 text-sm text-gray-500">+12% desde o último mês</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Total de Assinantes</h3>
          <p className="mt-2 text-3xl font-bold text-indigo-600">515</p>
          <p className="mt-1 text-sm text-gray-500">+8% desde o último mês</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Ticket Médio</h3>
          <p className="mt-2 text-3xl font-bold text-indigo-600">R$ 49,38</p>
          <p className="mt-1 text-sm text-gray-500">+3% desde o último mês</p>
        </div>
      </div>
    </div>
  );
};
