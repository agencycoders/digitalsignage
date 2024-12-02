import { useState } from 'react';
import { FiSave, FiGlobe, FiMail, FiDatabase } from 'react-icons/fi';

export const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Digital Signage',
    siteUrl: 'https://digitalsignage.com',
    supportEmail: 'suporte@digitalsignage.com',
    maxUploadSize: '100',
    defaultLanguage: 'pt-BR',
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.digitalsignage.com',
    smtpPort: '587',
    smtpUsername: 'noreply@digitalsignage.com',
    smtpPassword: '********',
    senderName: 'Digital Signage',
    senderEmail: 'noreply@digitalsignage.com',
  });

  const [storageSettings, setStorageSettings] = useState({
    provider: 'aws',
    region: 'sa-east-1',
    bucket: 'digitalsignage-media',
    accessKey: '********',
    secretKey: '********',
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerencie as configurações globais da plataforma
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FiSave className="mr-2 h-5 w-5" />
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <FiGlobe className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-lg font-bold text-gray-900">Configurações Gerais</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome do Site</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={generalSettings.siteName}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">URL do Site</label>
                <input
                  type="url"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={generalSettings.siteUrl}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteUrl: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email de Suporte</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={generalSettings.supportEmail}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, supportEmail: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tamanho Máximo de Upload (MB)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={generalSettings.maxUploadSize}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, maxUploadSize: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <FiMail className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-lg font-bold text-gray-900">Configurações de Email</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Servidor SMTP</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={emailSettings.smtpServer}
                  onChange={(e) => setEmailSettings({ ...emailSettings, smtpServer: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Porta SMTP</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={emailSettings.smtpPort}
                  onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Usuário SMTP</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={emailSettings.smtpUsername}
                  onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Senha SMTP</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={emailSettings.smtpPassword}
                  onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Storage Settings */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <FiDatabase className="h-6 w-6 text-indigo-600 mr-3" />
              <h2 className="text-lg font-bold text-gray-900">Configurações de Armazenamento</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Provedor</label>
                <select
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={storageSettings.provider}
                  onChange={(e) => setStorageSettings({ ...storageSettings, provider: e.target.value })}
                >
                  <option value="aws">Amazon S3</option>
                  <option value="gcp">Google Cloud Storage</option>
                  <option value="azure">Azure Blob Storage</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Região</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={storageSettings.region}
                  onChange={(e) => setStorageSettings({ ...storageSettings, region: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bucket/Container</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={storageSettings.bucket}
                  onChange={(e) => setStorageSettings({ ...storageSettings, bucket: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Chave de Acesso</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={storageSettings.accessKey}
                  onChange={(e) => setStorageSettings({ ...storageSettings, accessKey: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
