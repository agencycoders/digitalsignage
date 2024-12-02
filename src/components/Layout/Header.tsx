import { Link } from 'react-router-dom';
import { useStore } from '../../store';

export const Header = () => {
  const { isAuthenticated, logout } = useStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container-fluid flex-between h-[var(--header-height)]">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">TVCorp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="nav-link">
            Início
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/planos" className="nav-link">
                Planos
              </Link>
              <Link to="/dashboard" className="nav-link">
                Login
              </Link>
              <button onClick={logout} className="btn btn-outline">
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/planos" className="nav-link">
                Planos
              </Link>
              <Link to="/login" className="nav-link">
                Entrar
              </Link>
              <Link to="/register" className="btn btn-primary">
                Começar Agora
              </Link>
            </>
          )}
        </nav>

        <button className="md:hidden p-2 hover:bg-[var(--color-bg-light)] rounded-lg">
          <svg
            className="w-6 h-6 text-[var(--color-text)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
