import React, { useState } from 'react';
import { 
  FiHome, 
  FiShoppingCart, 
  FiUsers, 
  FiSettings, 
  FiMail,
  FiCalendar,
  FiMenu
} from 'react-icons/fi';

const Gestor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'purchases', icon: FiShoppingCart, label: 'Compras' },
    { id: 'subscriptions', icon: FiCalendar, label: 'Subscrições' },
    { id: 'customers', icon: FiUsers, label: 'Clientes' },
    { id: 'smtp', icon: FiSettings, label: 'Config. SMTP' },
    { id: 'emails', icon: FiMail, label: 'E-mails Transacionais' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="flex items-center justify-between px-4">
          <h2 className="text-2xl font-semibold">Painel Admin</h2>
        </div>

        <nav className="mt-10">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`flex items-center space-x-3 py-3 px-4 rounded transition duration-200 ${
                currentPage === item.id ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none md:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          <div className="flex items-center">
            <span className="text-gray-700">Bem-vindo, Administrador</span>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto">
            {/* Dashboard Content */}
            {currentPage === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-700 text-lg font-medium">Total Vendas</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">€0</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-700 text-lg font-medium">Clientes</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-700 text-lg font-medium">Subscrições Ativas</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-700 text-lg font-medium">Vendas Hoje</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">€0</p>
                </div>
              </div>
            )}

            {/* Other pages content will be added here */}
            {currentPage !== 'dashboard' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  {menuItems.find(item => item.id === currentPage)?.label}
                </h2>
                <p>Conteúdo em desenvolvimento...</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gestor;
