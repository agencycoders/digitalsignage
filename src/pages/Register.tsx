import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import '../assets/styles/auth.css';

export const Register = () => {
    const navigate = useNavigate();
    const { register } = useStore();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        setIsLoading(true);

        try {
            await register(name, email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Erro ao criar conta. Por favor, tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-[var(--header-height)] flex items-center justify-center">
            <div className="container-fluid py-12">
                <div className="max-w-md mx-auto">
                    <div className="card">
                        <div className="text-center mb-8 p-8">
                            <h1>Criar Conta</h1>
                            <p>Registre-se para gerir sua TV corporativa</p>
                        </div>

                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6 p-8 pt-0">
                            <div>
                                <label htmlFor="name" className="form-label">
                                    Nome Completo
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input"
                                    placeholder="Digite seu nome completo"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input"
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="form-label">
                                    Senha
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-input"
                                        placeholder="Digite sua senha"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="password-toggle"
                                    >
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirmar Senha
                                </label>
                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="form-input"
                                        placeholder="Confirme sua senha"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="password-toggle"
                                    >
                                        {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary"
                            >
                                {isLoading ? 'Criando conta...' : 'Criar Conta'}
                            </button>

                            <p className="text-center">
                                Já tem uma conta?{' '}
                                <Link to="/login" className="link">
                                    Faça login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
