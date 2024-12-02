import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
            <Header />
            {/* Add pt-16 to account for fixed header */}
            <main className="flex-1 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24 overflow-y-auto">
                <div className="max-w-7xl mx-auto w-full">
                    <Outlet />
                </div>
            </main>
            <footer className="w-full bg-white border-t border-gray-200 py-4 mt-auto">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} DigiTV. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};
