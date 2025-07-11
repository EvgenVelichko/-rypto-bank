import React from 'react';
import { Bitcoin, Shield, Zap, TrendingUp, ArrowRight, Star, Sparkles, Rocket } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Bitcoin,
      title: 'Криптовалюты',
      description: 'Торгуйте более чем 100 криптовалютами',
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Защищенные холодные кошельки',
    },
    {
      icon: Zap,
      title: 'Майнинг',
      description: 'Профессиональное майнинговое оборудование',
    },
    {
      icon: TrendingUp,
      title: 'Аналитика',
      description: 'Подробная статистика и прогнозы',
    },
  ];

  const stats = [
    { label: 'Пользователей', value: '2.5M+' },
    { label: 'Объем торгов', value: '$15.2B' },
    { label: 'Криптовалют', value: '100+' },
    { label: 'Стран', value: '50+' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-black to-green-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-300/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-green-400/20 rounded-full animate-bounce"></div>
        </div>
        
        <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
          <img src="/rick.jpg" alt="Rick" className="w-32 h-32 object-cover rounded-full border-2 border-green-400/30 shadow-2xl shadow-green-400/20" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
          <img src="/images.jpg" alt="Morty" className="w-24 h-24 object-cover rounded-full border-2 border-green-400/30 shadow-2xl shadow-green-400/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-green-400 animate-spin mr-2" style={{ animationDuration: '4s' }} />
              <span className="text-green-300 text-lg font-medium">Добро пожаловать в будущее</span>
              <Sparkles className="h-8 w-8 text-green-400 animate-spin ml-2" style={{ animationDuration: '4s' }} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-pulse">
              Добро пожаловать в{' '}
              <span className="block mt-2 bg-gradient-to-r from-green-300 via-green-400 to-green-200 bg-clip-text text-transparent">
                Crypto-Bank
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ваш надежный партнер в мире криптовалют. Торгуйте, майните и инвестируйте 
              с уверенностью в стиле <span className="text-green-400 font-semibold">Rick and Morty!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-black px-10 py-4 rounded-xl font-bold hover:from-green-300 hover:to-green-400 transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl shadow-green-400/30 hover:shadow-green-400/50 hover:scale-105 transform">
                <Rocket className="h-5 w-5 transition-transform duration-700 group-hover:translate-y-[-4px] group-hover:rotate-12" />
                <span>Начать торговлю</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              <button className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-bold hover:bg-green-400/20 hover:border-green-300 transition-all duration-500 backdrop-blur-sm hover:scale-105 transform">
                Смотреть курсы
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl border border-green-400/20 hover:border-green-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/20 backdrop-blur-sm hover:scale-105 transform">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-gray-300 font-medium group-hover:text-green-300 transition-colors duration-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-6">Наши возможности</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Все инструменты для успешной работы с криптовалютами
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-2xl border border-green-400/20 hover:border-green-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/30 backdrop-blur-sm hover:scale-105 transform relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <div className="mb-6 p-3 bg-green-400/10 rounded-xl w-fit">
                    <Icon className="h-12 w-12 text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-400">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-green-400/20 via-gray-900/80 to-green-900/30 rounded-3xl p-16 text-center border border-green-400/30 overflow-hidden backdrop-blur-sm shadow-2xl shadow-green-400/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.15),transparent_50%)]"></div>
          <div className="absolute top-4 right-4 opacity-30">
            <img src="/rick.jpg" alt="Rick" className="w-20 h-20 object-cover rounded-full border-2 border-green-400/50 shadow-xl shadow-green-400/30" />
          </div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent mb-6">
            Готовы окунуться в мир криптовалют?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Присоединяйтесь к миллионам пользователей, которые уже зарабатывают с нами
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group bg-gradient-to-r from-green-400 to-green-500 text-black px-10 py-4 rounded-xl font-bold hover:from-green-300 hover:to-green-400 transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl shadow-green-400/40 hover:shadow-green-400/60 hover:scale-105 transform">
                <Star className="h-5 w-5 transition-transform duration-700 group-hover:rotate-180 group-hover:scale-110" />
              <span>Создать аккаунт</span>
              </button>
              <button className="group border-2 border-green-400 text-green-400 px-10 py-4 rounded-xl font-bold hover:bg-green-400/20 hover:border-green-300 transition-all duration-500 backdrop-blur-sm hover:scale-105 transform">
              Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;