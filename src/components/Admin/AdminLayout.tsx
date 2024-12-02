import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiUsers, FiSettings, FiPackage, FiGrid, FiLogOut, FiVideo } from 'react-icons/fi';
import { useStore } from '../../store';

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useStore();

  const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: <FiGrid className="w-6 h-6" />
    },
    {
      name: 'Usuários',
      path: '/admin/users',
      icon: <FiUsers className="w-6 h-6" />
    },
    {
      name: 'Conteúdo',
      path: '/admin/content',
      icon: <FiVideo className="w-6 h-6" />
    },
    {
      name: 'Planos',
      path: '/admin/plans',
      icon: <FiPackage className="w-6 h-6" />
    },
    {
      name: 'Configurações',
      path: '/admin/settings',
      icon: <FiSettings className="w-6 h-6" />
    }
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 bg-indigo-800">
            <Link to="/admin" className="text-xl font-bold">
              Admin Panel
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-150 ${
                    isActive
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-800'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-indigo-800">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-indigo-100 rounded-lg hover:bg-indigo-800 transition-colors duration-150"
            >
              <FiLogOut className="w-6 h-6" />
              <span className="ml-3">Sair</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
