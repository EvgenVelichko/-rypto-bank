import React, { useState, memo, useMemo, useCallback } from 'react';
import { Zap, Cpu, HardDrive, Calculator, TrendingUp, Crown, Diamond, Gem } from 'lucide-react';

const MiningPage: React.FC = memo(() => {
  const [hashRate, setHashRate] = useState(100);
  const [powerCost, setPowerCost] = useState(0.1);
  const [power, setPower] = useState(3000);

  const miningPlans = useMemo(() => [
    {
      name: 'Executive',
      hashRate: '50 TH/s',
      power: '2500W',
      price: '$12,999',
      dailyProfit: '$325.00',
      icon: Cpu,
      tier: 'premium',
      features: ['Dedicated Support', 'Priority Queue', 'Custom Firmware']
    },
    {
      name: 'Elite',
      hashRate: '150 TH/s',
      power: '4000W',
      price: '$34,999',
      dailyProfit: '$875.00',
      icon: Crown,
      popular: true,
      tier: 'luxury',
      features: ['24/7 Concierge', 'White Glove Setup', 'Guaranteed ROI']
    },
    {
      name: 'Sovereign',
      hashRate: '500 TH/s',
      power: '8000W',
      price: '$99,999',
      dailyProfit: '$2,750.00',
      icon: Diamond,
      tier: 'exclusive',
      features: ['Private Facility', 'Custom Hardware', 'Institutional Grade']
    },
  ], []);

  const calculateProfit = useCallback(() => {
    const btcPrice = 43000;
    const networkHashrate = 400000000;
    const blockReward = 6.25;
    const blocksPerDay = 144;
    
    const dailyBTC = (hashRate / networkHashrate) * blockReward * blocksPerDay;
    const dailyRevenue = dailyBTC * btcPrice;
    const dailyElectricity = (power / 1000) * 24 * powerCost;
    const dailyProfit = dailyRevenue - dailyElectricity;
    
    return {
      dailyBTC: dailyBTC.toFixed(8),
      dailyRevenue: dailyRevenue.toFixed(2),
      dailyElectricity: dailyElectricity.toFixed(2),
      dailyProfit: dailyProfit.toFixed(2),
    };
  }, [hashRate, powerCost, power]);

  const profit = useMemo(() => calculateProfit(), [calculateProfit]);

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case 'premium': return 'from-blue-500 to-cyan-500';
      case 'luxury': return 'from-yellow-400 to-orange-500';
      case 'exclusive': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32 optimized-transform">
      {/* Luxury Header */}
      <div className="relative text-center">
        <div className="absolute -top-12 right-12 opacity-40 hidden md:block">
          <div className="relative">
            <img src="/images.jpg" alt="Morty" className="w-32 h-32 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" />
            <Gem className="absolute -top-3 -right-3 h-10 w-10 text-cyan-400 sparkle" />
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold gold-text mb-8">
          Институциональный Майнинг
        </h1>
        <p className="text-gray-300 text-2xl max-w-3xl mx-auto leading-relaxed">
          Промышленные решения для максимальной доходности
        </p>
      </div>

      {/* Luxury Mining Calculator */}
      <section className="relative bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-3xl p-12 border-3 diamond-border overflow-hidden backdrop-blur-xl glow-effect">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-8 right-8 opacity-40">
          <div className="relative">
            <img src="/rick.jpg" alt="Rick" className="w-20 h-20 object-cover rounded-full border-3 diamond-border shadow-2xl floating" />
            <Crown className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 sparkle" />
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-10">
            <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl">
              <Calculator className="h-12 w-12 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold gold-text">Калькулятор доходности</h2>
            <Diamond className="h-10 w-10 text-cyan-400 sparkle" />
          </div>
        </div>
        
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-bold text-yellow-400 mb-4">
                Хешрейт (TH/s)
              </label>
              <input
                type="number"
                value={hashRate}
                onChange={(e) => setHashRate(Number(e.target.value))}
                className="w-full px-6 py-4 bg-black/60 border-2 border-yellow-400/30 rounded-2xl text-yellow-400 text-lg focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:border-yellow-400/50 glow-effect"
              />
            </div>
            
            <div>
              <label className="block text-xl font-bold text-yellow-400 mb-4">
                Потребление энергии (W)
              </label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full px-6 py-4 bg-black/60 border-2 border-yellow-400/30 rounded-2xl text-yellow-400 text-lg focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:border-yellow-400/50 glow-effect"
              />
            </div>
            
            <div>
              <label className="block text-xl font-bold text-yellow-400 mb-4">
                Стоимость электричества ($/kWh)
              </label>
              <input
                type="number"
                step="0.01"
                value={powerCost}
                onChange={(e) => setPowerCost(Number(e.target.value))}
                className="w-full px-6 py-4 bg-black/60 border-2 border-yellow-400/30 rounded-2xl text-yellow-400 text-lg focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all duration-700 backdrop-blur-sm hover:border-yellow-400/50 glow-effect"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-black/80 via-gray-900/60 to-purple-900/40 rounded-3xl p-10 border-2 border-yellow-400/30 backdrop-blur-xl glow-effect">
            <h3 className="text-2xl font-bold gold-text mb-8 flex items-center">
              <TrendingUp className="h-8 w-8 mr-3" />
              Прогноз доходности
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-bold text-lg">BTC в день:</span>
                <span className="text-yellow-400 font-mono font-bold text-xl">{profit.dailyBTC}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-bold text-lg">Доход в день:</span>
                <span className="text-green-400 font-mono font-bold text-xl">${profit.dailyRevenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 font-bold text-lg">Электричество:</span>
                <span className="text-red-400 font-mono font-bold text-xl">-${profit.dailyElectricity}</span>
              </div>
              <div className="flex justify-between items-center border-t-2 border-yellow-400/30 pt-6 mt-6">
                <span className="text-yellow-400 font-bold text-xl">Чистая прибыль:</span>
                <span className="gold-text font-mono font-bold text-3xl">${profit.dailyProfit}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Mining Plans */}
      <section>
        <h2 className="text-5xl md:text-6xl font-bold gold-text mb-16 text-center">
          Эксклюзивные пакеты
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {miningPlans.map((plan, index) => {
            const Icon = plan.icon;
            const gradient = getTierGradient(plan.tier);
            return (
              <div
                key={index}
                className={`group relative p-12 rounded-3xl border-3 transition-all duration-700 hover:scale-110 transform backdrop-blur-xl ${
                  plan.popular
                    ? 'diamond-border bg-gradient-to-br from-yellow-400/20 via-black/80 to-orange-500/20 glow-effect'
                    : 'border-yellow-400/30 bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 hover:glow-effect'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="luxury-gradient text-black px-8 py-3 rounded-full text-lg font-bold shadow-2xl glow-effect">
                      Рекомендуемый
                    </span>
                  </div>
                )}
                
                <div className="relative text-center">
                  <div className="mb-8 p-6 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl w-fit mx-auto">
                    <Icon className="h-20 w-20 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                  <h3 className="text-3xl font-bold gold-text mb-6 group-hover:scale-105 transition-all duration-700">{plan.name}</h3>
                  <div className="text-5xl font-bold gold-text mb-8">{plan.price}</div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-bold">Хешрейт:</span>
                      <span className="text-yellow-400 font-bold text-lg">{plan.hashRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-bold">Потребление:</span>
                      <span className="text-yellow-400 font-bold text-lg">{plan.power}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-bold">Доход/день:</span>
                      <span className="text-green-400 font-bold text-lg">{plan.dailyProfit}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-yellow-400 font-bold mb-4">Включено:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <Diamond className="h-4 w-4 text-cyan-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-5 rounded-2xl font-bold text-xl transition-all duration-700 hover:scale-105 transform ${
                    plan.popular
                      ? 'luxury-gradient text-black hover:shadow-2xl glow-effect'
                      : 'border-3 diamond-border text-yellow-400 hover:bg-yellow-400/20'
                  }`}>
                    Выбрать пакет
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Luxury Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: TrendingUp, value: '99.99%', label: 'Аптайм', gradient: 'from-green-400 to-emerald-500' },
          { icon: Crown, value: '500+', label: 'VIP Клиентов', gradient: 'from-yellow-400 to-orange-500' },
          { icon: Diamond, value: '2.5 EH/s', label: 'Общий хешрейт', gradient: 'from-purple-500 to-pink-500' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="group bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-3xl p-10 border-3 diamond-border text-center hover:glow-effect transition-all duration-700 hover:scale-110 transform backdrop-blur-xl">
              <div className="p-4 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl w-fit mx-auto mb-6">
                <Icon className="h-16 w-16 text-yellow-400 group-hover:scale-125 transition-all duration-700" />
              </div>
              <div className="text-4xl font-bold gold-text mb-4 group-hover:scale-110 transition-all duration-700">{stat.value}</div>
              <div className="text-gray-300 font-bold text-lg group-hover:text-yellow-400 transition-colors duration-700">{stat.label}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
});

MiningPage.displayName = 'MiningPage';

export default MiningPage;