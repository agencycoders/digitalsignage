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

// Simulação de autenticação
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

// Componente para proteger rotas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const router = createBrowserRouter([
  {
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
      <ProtectedRoute>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ProtectedRoute>
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
    path: '*',
    element: <NotFound />
  }
]);
