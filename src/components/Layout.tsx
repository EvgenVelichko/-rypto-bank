import React, { useState } from 'react';
import { Menu, X, Bitcoin, Zap, ShoppingCart, TrendingUp, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', id: 'home', icon: Home },
    { name: 'Майнинг', id: 'mining', icon: Zap },
    { name: 'Курсы', id: 'rates', icon: TrendingUp },
    { name: 'Магазин', id: 'shop', icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400">
      {/* Header */}
      <header className="bg-gray-900/95 backdrop-blur-md border-b border-green-400/30 sticky top-0 z-50 shadow-lg shadow-green-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-400/40 shadow-lg shadow-green-400/20">
                <img src="/rick.jpg" alt="Rick" className="w-full h-full object-cover opacity-90" />
              </div>
              <Bitcoin className="h-8 w-8 text-green-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Crypto-Bank</span>
                <span className="text-xs text-green-300/80">Rick & Morty Style</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-500 hover:bg-green-400/20 hover:text-green-300 hover:scale-105 transform ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-green-400/30 to-green-500/20 text-green-300 shadow-lg shadow-green-400/30 scale-105'
                        : 'text-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4 transition-transform duration-400 group-hover:scale-110" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-green-400/20 transition-all duration-500 hover:scale-110 transform"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-400/30 bg-gray-900/98 backdrop-blur-lg shadow-xl shadow-green-400/10 animate-in slide-in-from-top duration-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-500 hover:bg-green-400/20 hover:text-green-300 hover:scale-105 transform ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-green-400/30 to-green-500/20 text-green-300 shadow-lg shadow-green-400/30'
                        : 'text-gray-300'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-gray-900 to-gray-800/50 border-t border-green-400/30 mt-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative text-center">
            <div className="absolute top-0 left-8 transform -translate-y-6 opacity-30 hidden md:block">
              <img src="/images.jpg" alt="Morty" className="w-16 h-16 object-cover rounded-full border-2 border-green-400/40 shadow-xl shadow-green-400/20 transition-transform duration-700 hover:scale-110 hover:rotate-6" />
            </div>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-400/40 shadow-lg shadow-green-400/20">
                <img src="/rick.jpg" alt="Rick" className="w-full h-full object-cover opacity-90" />
              </div>
              <Bitcoin className="h-8 w-8 text-green-400 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Crypto-Bank</span>
            </div>
            <p className="text-gray-400 text-base max-w-md mx-auto">
              © 2025 Crypto-Bank. Вся вселенная в твоих руках, как сказал бы Рик.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;