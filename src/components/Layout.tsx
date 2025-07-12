import React, { useState, memo } from 'react';
import { Menu, X, Bitcoin, Zap, ShoppingCart, TrendingUp, Home, Crown, Diamond, Star } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = memo(({ children, currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', id: 'home', icon: Home },
    { name: 'Майнинг', id: 'mining', icon: Zap },
    { name: 'Курсы', id: 'rates', icon: TrendingUp },
    { name: 'Магазин', id: 'shop', icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white relative overflow-hidden">
      {/* Luxury background effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full sparkle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="relative bg-black/80 backdrop-blur-xl border-b border-gradient-to-r from-yellow-400/30 via-orange-500/30 to-purple-500/30 sticky top-0 z-50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Luxury Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden border-3 diamond-border shadow-2xl glow-effect">
                  <img src="/rick.jpg" alt="Rick" className="w-full h-full object-cover" />
                </div>
                <Crown className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 sparkle" />
              </div>
              <Bitcoin className="h-10 w-10 text-yellow-400 floating" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold gold-text">Crypto-Bank</span>
                <span className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Elite Edition
                </span>
              </div>
              <Diamond className="h-8 w-8 text-cyan-400 sparkle" style={{ animationDelay: '1s' }} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`group relative flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-700 hover:scale-110 transform ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-purple-500/20 text-yellow-400 shadow-2xl glow-effect'
                        : 'text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-purple-500/10 hover:text-yellow-400'
                    }`}
                  >
                    <Icon className="h-5 w-5 transition-all duration-700 group-hover:rotate-12 group-hover:scale-125" />
                    <span className="font-medium">{item.name}</span>
                    {currentPage === item.id && (
                      <Star className="h-4 w-4 text-yellow-400 sparkle" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-purple-500/20 hover:from-yellow-400/30 hover:to-purple-500/30 transition-all duration-700 hover:scale-110 transform glow-effect"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-yellow-400" /> : <Menu className="h-6 w-6 text-yellow-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-yellow-400/30 bg-black/95 backdrop-blur-xl shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-700 hover:scale-105 transform ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-purple-500/20 text-yellow-400 glow-effect'
                        : 'text-gray-300 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-purple-500/10 hover:text-yellow-400'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="font-medium">{item.name}</span>
                    {currentPage === item.id && <Star className="h-4 w-4 text-yellow-400 sparkle ml-auto" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative flex-1 optimized-transform">
        {children}
      </main>

      {/* Luxury Footer */}
      <footer className="relative bg-gradient-to-t from-black via-gray-900/80 to-transparent border-t border-yellow-400/30 mt-20 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="absolute top-8 left-8 opacity-40 hidden md:block">
              <img src="/images.jpg" alt="Morty" className="w-20 h-20 object-cover rounded-full border-3 diamond-border shadow-2xl glow-effect floating" />
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden border-3 diamond-border shadow-2xl glow-effect">
                <img src="/rick.jpg" alt="Rick" className="w-full h-full object-cover" />
              </div>
              <Bitcoin className="h-12 w-12 text-yellow-400 floating" />
              <span className="text-3xl font-bold gold-text">Crypto-Bank</span>
              <Diamond className="h-10 w-10 text-cyan-400 sparkle" />
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              © 2025 Crypto-Bank Elite Edition. Эксклюзивные финансовые решения для избранных.
            </p>
            <div className="flex justify-center space-x-6">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full text-yellow-400 font-medium">
                VIP Support 24/7
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-400 font-medium">
                Private Banking
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;