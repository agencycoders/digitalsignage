import { createBrowserRouter, Navigate, Outlet, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Planos } from './pages/Planos';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';
import { Library } from './pages/Dashboard/Library';
import { Playlists } from './pages/Dashboard/Playlists';
import { Schedule } from './pages/Dashboard/Schedule';
import { TVs } from './pages/Dashboard/TVs';
import { Settings } from './pages/Dashboard/Settings';
import { DashboardLayout } from './components/Dashboard/DashboardLayout';
import { Header } from './components/Layout/Header';
import { NotFound } from './pages/NotFound';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { AdminUsers } from './pages/Admin/Users';
import { AdminContent } from './pages/Admin/Content';
import { AdminPlans } from './pages/Admin/Plans';
import { AdminSettings } from './pages/Admin/Settings';
import { AdminLayout } from './components/Admin/AdminLayout';
import { useStore } from './store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Componente de erro personalizado
const ErrorBoundary = () => {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-8">Algo deu errado.</p>
        <a href="/" className="text-indigo-600 hover:text-indigo-500">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

// Layout para páginas públicas
const PublicLayout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <div className="container-fluid section">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// Componente para proteger rotas administrativas
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (user?.role !== 'Super Admin') {
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  return isAuthenticated && user?.role === 'Super Admin' ? <>{children}</> : null;
};

// Componente para proteger rotas de cliente
const ClientRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <>{children}</> : null;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/planos',
        element: <Planos />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ]
  },
  {
    path: '/dashboard',
    element: (
      <ClientRoute>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ClientRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'playlists',
        element: <Playlists />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'tvs',
        element: <TVs />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminLayout>
          <Outlet />
        </AdminLayout>
      </AdminRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <AdminDashboard />,
      },
      {
        path: 'users',
        element: <AdminUsers />,
      },
      {
        path: 'content',
        element: <AdminContent />,
      },
      {
        path: 'plans',
        element: <AdminPlans />,
      },
      {
        path: 'settings',
        element: <AdminSettings />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
