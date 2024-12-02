import React from 'react';
import { Link } from 'react-router-dom';

export const Planos = () => {
  const plans = [
    {
      name: 'Plano Básico',
      price: '€99',
      period: '/mês',
      description: 'Ideal para pequenas empresas',
      features: [
        'Até 10 TVs conectadas',
        'Playlists ilimitadas',
        'Suporte por email',
        'Relatórios básicos',
        'Armazenamento 50GB',
        'Atualizações em tempo real',
        'Templates básicos'
      ]
    },
    {
      name: 'Plano Pro',
      price: '€249',
      period: '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Até 30 TVs conectadas',
        'Playlists ilimitadas',
        'Suporte prioritário 24/7',
        'Relatórios avançados',
        'API personalizada',
        'Armazenamento 200GB',
        'Templates premium',
        'Gestão de múltiplos usuários',
        'Backups automáticos'
      ],
      highlighted: true
    }
  ];

  const benefits = [
    {
      title: 'Fácil de Usar',
      description: 'Interface intuitiva que não requer conhecimento técnico',
      icon: (
        <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Suporte Dedicado',
      description: 'Equipe especializada pronta para ajudar quando precisar',
      icon: (
        <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Segurança Garantida',
      description: 'Seus dados protegidos com a mais alta tecnologia',
      icon: (
        <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o período de teste?',
      answer: 'Oferecemos 14 dias de teste gratuito em todos os planos, sem compromisso. Você pode cancelar a qualquer momento.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, e o valor será ajustado proporcionalmente.'
    },
    {
      question: 'Preciso de equipamento especial?',
      answer: 'Não, nossa plataforma funciona com qualquer Smart TV ou dispositivo com conexão à internet.'
    }
  ];

  return (
    <div className="min-h-screen pt-[var(--header-height)]">
      {/* Hero Section */}
      <div className="container-fluid py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Escolha o Plano Ideal para Sua Empresa
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto mb-12">
          Transforme suas comunicações internas com nossa plataforma completa de gestão de conteúdo digital
        </p>
      </div>

      {/* Planos */}
      <div className="container-fluid py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`card p-8 hover:scale-105 transition-transform duration-300 ${
                  plan.highlighted ? 'border-[var(--color-primary)]' : ''
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    <span className="gradient-text">{plan.price}</span>
                    <span className="text-[var(--color-text-muted)] text-base">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-muted)]">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg 
                        className="w-5 h-5 text-[var(--color-primary)] mr-3" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link 
                    to={`/checkout?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`}
                    className="btn btn-primary text-sm px-4 py-2 w-40 text-center mx-auto block"
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefícios */}
      <div className="container-fluid py-20 bg-[var(--color-bg-dark)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher nossa plataforma?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-text-muted)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container-fluid py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-[var(--color-text-muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container-fluid py-20 bg-[var(--color-bg-dark)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-[var(--color-text-muted)] mb-8">
            Experimente gratuitamente por 14 dias e transforme sua comunicação corporativa
          </p>
          <Link 
            to="/register" 
            className="btn btn-primary text-sm px-4 py-2 w-40 inline-block"
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </div>
  );
};
