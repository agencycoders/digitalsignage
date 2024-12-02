import React from 'react';

export const Overview = () => {
  const stats = [
    {
      title: 'TVs Ativas',
      value: '8',
      change: '+2 esta semana',
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Conteúdos',
      value: '124',
      change: '+15 este mês',
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Playlists',
      value: '12',
      change: '+3 este mês',
      icon: (
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      title: 'Agendamentos',
      value: '28',
      change: '+5 hoje',
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const recentContent = [
    {
      type: 'video',
      title: 'Vídeo Promocional Q1',
      duration: '0:45',
      date: 'Há 2 horas'
    },
    {
      type: 'image',
      title: 'Banner Novo Produto',
      duration: '10s',
      date: 'Há 3 horas'
    },
    {
      type: 'text',
      title: 'Comunicado Importante',
      duration: '15s',
      date: 'Há 5 horas'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Visão Geral</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-[var(--color-bg-dark)]">
                {stat.icon}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">{stat.change}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold gradient-text">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">Conteúdo Recente</h2>
          <div className="space-y-4">
            {recentContent.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-[var(--color-bg-dark)]">
                <div className="flex items-center space-x-4">
                  {content.type === 'video' && (
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {content.type === 'image' && (
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {content.type === 'text' && (
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                  <div>
                    <h3 className="font-medium">{content.title}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Duração: {content.duration}</p>
                  </div>
                </div>
                <span className="text-sm text-[var(--color-text-muted)]">{content.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-4">TVs Ativas</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((tv) => (
              <div key={tv} className="flex items-center justify-between p-4 rounded-lg bg-[var(--color-bg-dark)]">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div>
                    <h3 className="font-medium">TV {tv}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">Playlist: Conteúdo Principal</p>
                  </div>
                </div>
                <span className="text-sm text-[var(--color-text-muted)]">Online há 8h</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
