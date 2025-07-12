import React, { memo, useMemo } from 'react';
import { Bitcoin, Shield, Zap, TrendingUp, ArrowRight, Star, Sparkles, Rocket, Crown, Diamond, Gem } from 'lucide-react';

const HomePage: React.FC = memo(() => {
  const features = useMemo(() => [
    {
      icon: Bitcoin,
      title: 'Эксклюзивные Активы',
      description: 'Доступ к премиальным криптовалютам и закрытым ICO',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Банковская Безопасность',
      description: 'Швейцарский уровень конфиденциальности и защиты',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Институциональный Майнинг',
      description: 'Промышленные фермы с доходностью 300%+',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'AI Аналитика',
      description: 'Персональные прогнозы от квантовых алгоритмов',
      gradient: 'from-green-400 to-emerald-500'
    },
  ], []);

  const stats = useMemo(() => [
    { label: 'VIP Клиентов', value: '2.5K+', icon: Crown },
    { label: 'Управляемых Активов', value: '$15.2B', icon: Diamond },
    { label: 'Эксклюзивных Монет', value: '100+', icon: Gem },
    { label: 'Стран Присутствия', value: '50+', icon: Star },
  ], []);

  return (
    <div className="space-y-32 optimized-transform">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-black to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        
        {/* Luxury decorative elements */}
        <div className="absolute top-20 right-20 opacity-30 hidden lg:block">
          <div className="relative">
            <img src="/rick.jpg" alt="Rick" className="w-40 h-40 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" />
            <Crown className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 sparkle" />
          </div>
        </div>
        <div className="absolute bottom-20 left-20 opacity-30 hidden lg:block">
          <div className="relative">
            <img src="/images.jpg" alt="Morty" className="w-32 h-32 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" style={{ animationDelay: '2s' }} />
            <Diamond className="absolute -top-2 -right-2 h-8 w-8 text-cyan-400 sparkle" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-yellow-400 sparkle mr-4" />
              <span className="text-yellow-400 text-2xl font-bold luxury-gradient px-6 py-2 rounded-full">
                Добро пожаловать в элиту
              </span>
              <Sparkles className="h-12 w-12 text-yellow-400 sparkle ml-4" style={{ animationDelay: '1s' }} />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block gold-text mb-4">Crypto-Bank</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Elite Edition
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed">
              Эксклюзивные финансовые решения для <span className="gold-text font-bold">избранных</span>.
              <br />Где каждый клиент — <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">VIP персона</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group luxury-gradient text-black px-12 py-6 rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-700 flex items-center justify-center space-x-3 shadow-2xl glow-effect">
                <Rocket className="h-6 w-6 transition-all duration-700 group-hover:translate-y-[-8px] group-hover:rotate-12" />
                <span>Стать VIP клиентом</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-3 transition-all duration-700" />
              </button>
              <button className="group border-3 diamond-border text-yellow-400 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:scale-110 transform">
                <span className="gold-text">Частная консультация</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group text-center p-10 bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-3xl border-3 diamond-border hover:glow-effect transition-all duration-700 hover:scale-110 transform backdrop-blur-xl">
                <div className="mb-6">
                  <Icon className="h-16 w-16 text-yellow-400 mx-auto sparkle group-hover:scale-125 transition-all duration-700" />
                </div>
                <div className="text-5xl md:text-6xl font-bold gold-text mb-4 group-hover:scale-110 transition-all duration-700">{stat.value}</div>
                <div className="text-gray-300 font-bold text-lg group-hover:text-yellow-400 transition-colors duration-700">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gold-text mb-8">Эксклюзивные привилегии</h2>
          <p className="text-gray-300 text-2xl max-w-3xl mx-auto leading-relaxed">
            Услуги мирового класса для самых требовательных клиентов
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-10 bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-3xl border-3 diamond-border hover:glow-effect transition-all duration-700 hover:scale-110 transform backdrop-blur-xl relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                <div className="relative">
                  <div className="mb-8 p-4 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl w-fit mx-auto">
                    <Icon className="h-16 w-16 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                  <h3 className="text-2xl font-bold gold-text mb-4 group-hover:scale-105 transition-all duration-700">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-700 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Luxury CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-yellow-400/20 via-black/80 to-purple-900/30 rounded-3xl p-20 text-center border-3 diamond-border overflow-hidden backdrop-blur-xl glow-effect">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.15),transparent_50%)]"></div>
          <div className="absolute top-8 right-8 opacity-40">
            <div className="relative">
              <img src="/rick.jpg" alt="Rick" className="w-24 h-24 object-cover rounded-full border-3 diamond-border shadow-2xl floating" />
              <Crown className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 sparkle" />
            </div>
          </div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-bold gold-text mb-8">
              Готовы присоединиться к элите?
            </h2>
            <p className="text-gray-300 text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Эксклюзивное членство для тех, кто привык к лучшему
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group luxury-gradient text-black px-12 py-6 rounded-2xl font-bold text-xl hover:scale-110 transition-all duration-700 flex items-center justify-center space-x-3 shadow-2xl glow-effect">
                <Star className="h-6 w-6 transition-all duration-700 group-hover:rotate-180 group-hover:scale-125" />
                <span>Стать VIP клиентом</span>
              </button>
              <button className="group border-3 diamond-border text-yellow-400 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:scale-110 transform">
                <span className="gold-text">Связаться с консьержем</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;