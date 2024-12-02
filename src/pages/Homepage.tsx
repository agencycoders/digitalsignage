import React from 'react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Gestão Multi-Ecrã',
      description: 'Controle o conteúdo em vários ecrãs a partir de um único painel de forma simples.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Playlists Dinâmicas',
      description: 'Crie e agende playlists de conteúdo com nossa interface intuitiva de arrastar e soltar.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Análise em Tempo Real',
      description: 'Acompanhe o desempenho e engajamento com análises e relatórios detalhados.',
    },
  ];

  const stats = [
    {
      value: '10K+',
      label: 'Ecrãs Ativos',
    },
    {
      value: '5M+',
      label: 'Visualizações Diárias',
    },
    {
      value: '99.9%',
      label: 'Disponibilidade',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-[var(--header-height)] pb-20">
        <div className="container-fluid py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              TV Corporativa
              <span className="gradient-text block">Simples e Moderna</span>
            </h1>
            <p className="text-xl mb-8">
              Crie, gerencie e exiba conteúdo digital em múltiplos ecrãs com a nossa plataforma intuitiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn btn-primary text-sm px-4 py-2 w-40">
                Experimente Grátis
              </Link>
              <Link to="/demo" className="btn btn-outline text-sm px-4 py-2 w-40">
                Ver Demonstração
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tudo o que precisa para sua
            <span className="gradient-text"> TV Corporativa</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6">
                <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                <div className="text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-fluid">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Planos Simples e Transparentes
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-12">
            Escolha o plano ideal para sua empresa
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Básico */}
            <div className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Básico</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className="gradient-text">€99</span>
                  <span className="text-[var(--color-text-muted)] text-base">/mês</span>
                </div>
                <p className="text-[var(--color-text-muted)]">Ideal para pequenas empresas</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Até 10 TVs conectadas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Playlists ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte por email</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios básicos</span>
                </li>
              </ul>
              
              <Link to="/checkout?plan=basic" className="btn btn-primary text-sm px-4 py-2 w-40 text-center mx-auto block">
                Começar Agora
              </Link>
            </div>

            {/* Plano Pro */}
            <div className="card p-8 hover:scale-105 transition-transform duration-300 border-[var(--color-primary)]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Pro</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className="gradient-text">€249</span>
                  <span className="text-[var(--color-text-muted)] text-base">/mês</span>
                </div>
                <p className="text-[var(--color-text-muted)]">Para empresas em crescimento</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Até 30 TVs conectadas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Playlists ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suporte prioritário 24/7</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Relatórios avançados</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API personalizada</span>
                </li>
              </ul>
              
              <Link to="/checkout?plan=pro" className="btn btn-primary text-sm px-4 py-2 w-40 text-center mx-auto block">
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-fluid text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar suas comunicações internas?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já utilizam nossa plataforma para criar experiências digitais envolventes.
          </p>
          <Link to="/register" className="btn btn-primary text-sm px-4 py-2 w-40 inline-block">
            Comece Agora
          </Link>
        </div>
      </section>
    </div>
  );
};
