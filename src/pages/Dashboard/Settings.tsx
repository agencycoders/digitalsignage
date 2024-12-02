import React, { useState } from 'react';
import { DashboardLayout } from '../../components/Dashboard/DashboardLayout';

interface User {
  name: string;
  email: string;
  company: string;
  role: string;
  timezone: string;
  language: string;
  notifications: {
    email: boolean;
    browser: boolean;
    updates: boolean;
    newsletter: boolean;
  };
}

export const Settings = () => {
  const [user, setUser] = useState<User>({
    name: 'João Silva',
    email: 'joao.silva@empresa.com',
    company: 'Empresa LTDA',
    role: 'Administrador',
    timezone: 'America/Sao_Paulo',
    language: 'pt-BR',
    notifications: {
      email: true,
      browser: true,
      updates: true,
      newsletter: false
    }
  });

  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security'>('profile');

  const [darkMode, setDarkMode] = useState(true);

  const handleNotificationChange = (key: keyof typeof user.notifications) => {
    setUser(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key]
      }
    }));
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8">Configurações</h1>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'profile'
                ? 'bg-[var(--color-primary)] text-white'
                : 'hover:bg-[var(--color-bg-light)]'
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'notifications'
                ? 'bg-[var(--color-primary)] text-white'
                : 'hover:bg-[var(--color-bg-light)]'
            }`}
          >
            Notificações
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'security'
                ? 'bg-[var(--color-primary)] text-white'
                : 'hover:bg-[var(--color-bg-light)]'
            }`}
          >
            Segurança
          </button>
        </div>

        {/* Profile Settings */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-6">Informações Pessoais</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="input w-full"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2">Empresa</label>
                  <input
                    type="text"
                    className="input w-full"
                    value={user.company}
                    onChange={(e) => setUser({ ...user, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2">Cargo</label>
                  <input
                    type="text"
                    className="input w-full"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Salvar Alterações
                </button>
              </form>
            </div>

            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-6">Preferências</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Fuso Horário</label>
                  <select
                    className="input w-full"
                    value={user.timezone}
                    onChange={(e) => setUser({ ...user, timezone: e.target.value })}
                  >
                    <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                    <option value="America/New_York">Nova York (GMT-5)</option>
                    <option value="Europe/London">Londres (GMT)</option>
                    <option value="Europe/Paris">Paris (GMT+1)</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Idioma</label>
                  <select
                    className="input w-full"
                    value={user.language}
                    onChange={(e) => setUser({ ...user, language: e.target.value })}
                  >
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en-US">English (US)</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Salvar Preferências
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-6">Preferências de Notificação</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notificações por Email</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Receba atualizações importantes por email
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={user.notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notificações do Navegador</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Receba notificações em tempo real
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={user.notifications.browser}
                    onChange={() => handleNotificationChange('browser')}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Atualizações do Sistema</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Seja notificado sobre novas funcionalidades
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={user.notifications.updates}
                    onChange={() => handleNotificationChange('updates')}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Newsletter</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Receba dicas e novidades mensalmente
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={user.notifications.newsletter}
                    onChange={() => handleNotificationChange('newsletter')}
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-6">Alterar Senha</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Senha Atual</label>
                  <input type="password" className="input w-full" />
                </div>

                <div>
                  <label className="block mb-2">Nova Senha</label>
                  <input type="password" className="input w-full" />
                </div>

                <div>
                  <label className="block mb-2">Confirmar Nova Senha</label>
                  <input type="password" className="input w-full" />
                </div>

                <button type="submit" className="btn btn-primary">
                  Alterar Senha
                </button>
              </form>
            </div>

            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-6">Autenticação em Duas Etapas</h2>
              <div className="space-y-4">
                <p className="text-[var(--color-text-muted)]">
                  Adicione uma camada extra de segurança à sua conta ativando a autenticação em duas etapas.
                </p>

                <button className="btn btn-primary w-full">
                  Configurar Autenticação em Duas Etapas
                </button>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <h3 className="font-medium mb-4">Sessões Ativas</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Windows - Chrome</p>
                        <p className="text-sm text-[var(--color-text-muted)]">São Paulo, Brasil</p>
                      </div>
                      <span className="text-sm text-green-500">Atual</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">iPhone - Safari</p>
                        <p className="text-sm text-[var(--color-text-muted)]">São Paulo, Brasil</p>
                      </div>
                      <button className="text-sm text-red-500">Encerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
