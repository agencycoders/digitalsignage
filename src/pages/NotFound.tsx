import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página não encontrada</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
};
