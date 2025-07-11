import React, { useState } from 'react';
import { Zap, Cpu, HardDrive, Calculator, TrendingUp } from 'lucide-react';

const MiningPage: React.FC = () => {
  const [hashRate, setHashRate] = useState(100);
  const [powerCost, setPowerCost] = useState(0.1);
  const [power, setPower] = useState(3000);

  const miningPlans = [
    {
      name: 'Starter',
      hashRate: '10 TH/s',
      power: '1200W',
      price: '$599',
      dailyProfit: '$12.50',
      icon: Cpu,
    },
    {
      name: 'Professional',
      hashRate: '50 TH/s',
      power: '2500W',
      price: '$2499',
      dailyProfit: '$62.50',
      icon: HardDrive,
      popular: true,
    },
    {
      name: 'Enterprise',
      hashRate: '100 TH/s',
      power: '4000W',
      price: '$4999',
      dailyProfit: '$125.00',
      icon: Zap,
    },
  ];

  const calculateProfit = () => {
    const btcPrice = 43000;
    const networkHashrate = 400000000; // TH/s
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
  };

  const profit = calculateProfit();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
      {/* Header */}
      <div className="relative text-center">
        <div className="absolute -top-8 right-8 opacity-25 hidden md:block">
          <img src="/images.jpg" alt="Morty" className="w-24 h-24 object-cover rounded-full border-2 border-green-400/40 shadow-2xl shadow-green-400/30" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-6">
          Майнинг оборудование
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          Профессиональное оборудование для майнинга криптовалют
        </p>
      </div>

      {/* Mining Calculator */}
      <section className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-3xl p-10 border border-green-400/30 overflow-hidden backdrop-blur-sm shadow-2xl shadow-green-400/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-6 right-6 opacity-30">
          <img src="/rick.jpg" alt="Rick" className="w-16 h-16 object-cover rounded-full border-2 border-green-400/40 shadow-xl shadow-green-400/30" />
        </div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-green-400/20 rounded-xl">
              <Calculator className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Калькулятор майнинга</h2>
          </div>
        </div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div>
              <label className="block text-base font-semibold text-gray-300 mb-3">
                Хешрейт (TH/s)
              </label>
              <input
                type="number"
                value={hashRate}
                onChange={(e) => setHashRate(Number(e.target.value))}
                className="w-full px-5 py-3 bg-gray-800/80 border border-green-400/30 rounded-xl text-green-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-500 backdrop-blur-sm hover:border-green-400/50"
              />
            </div>
            
            <div>
              <label className="block text-base font-semibold text-gray-300 mb-3">
                Потребление энергии (W)
              </label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(Number(e.target.value))}
                className="w-full px-5 py-3 bg-gray-800/80 border border-green-400/30 rounded-xl text-green-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-500 backdrop-blur-sm hover:border-green-400/50"
              />
            </div>
            
            <div>
              <label className="block text-base font-semibold text-gray-300 mb-3">
                Стоимость электричества ($/kWh)
              </label>
              <input
                type="number"
                step="0.01"
                value={powerCost}
                onChange={(e) => setPowerCost(Number(e.target.value))}
                className="w-full px-5 py-3 bg-gray-800/80 border border-green-400/30 rounded-xl text-green-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-500 backdrop-blur-sm hover:border-green-400/50"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/50 rounded-2xl p-8 border border-green-400/30 backdrop-blur-sm shadow-xl shadow-green-400/10">
            <h3 className="text-xl font-bold text-green-400 mb-6">Результаты</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">BTC в день:</span>
                <span className="text-green-400 font-mono font-bold">{profit.dailyBTC}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Доход в день:</span>
                <span className="text-green-400 font-mono font-bold">${profit.dailyRevenue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300 font-medium">Электричество:</span>
                <span className="text-red-400 font-mono font-bold">-${profit.dailyElectricity}</span>
              </div>
              <div className="flex justify-between border-t border-green-400/30 pt-4 mt-4">
                <span className="text-gray-300 font-bold">Прибыль в день:</span>
                <span className="text-green-400 font-mono font-bold text-xl">${profit.dailyProfit}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Plans */}
      <section>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-12 text-center">
          Майнинг планы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {miningPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`group relative p-10 rounded-3xl border transition-all duration-700 hover:shadow-2xl hover:scale-105 transform ${
                  plan.popular
                    ? 'border-green-400 bg-gradient-to-br from-green-400/10 to-green-500/5 shadow-green-400/30'
                    : 'border-green-400/30 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:border-green-400/60 backdrop-blur-sm'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-green-400/30">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="relative text-center">
                  <div className="mb-6 p-4 bg-green-400/10 rounded-2xl w-fit mx-auto">
                    <Icon className="h-16 w-16 text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-400">{plan.name}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-6">{plan.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">Хешрейт:</span>
                      <span className="text-green-400 font-bold">{plan.hashRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">Потребление:</span>
                      <span className="text-green-400 font-bold">{plan.power}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">Доход/день:</span>
                      <span className="text-green-400 font-bold">{plan.dailyProfit}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 transform ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-400 to-green-500 text-black hover:from-green-300 hover:to-green-400 shadow-lg shadow-green-400/30 transition-all duration-500'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400/20 hover:border-green-300'
                  }`}>
                    Выбрать план
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-8 border border-green-400/30 text-center hover:border-green-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/20 backdrop-blur-sm hover:scale-105 transform">
          <div className="p-3 bg-green-400/10 rounded-xl w-fit mx-auto mb-4">
            <TrendingUp className="h-10 w-10 text-green-400 group-hover:scale-110 transition-transform duration-600" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-2">99.9%</div>
          <div className="text-gray-300 font-medium group-hover:text-green-300 transition-colors duration-400">Аптайм</div>
        </div>
        
        <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-8 border border-green-400/30 text-center hover:border-green-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/20 backdrop-blur-sm hover:scale-105 transform">
          <div className="p-3 bg-green-400/10 rounded-xl w-fit mx-auto mb-4">
            <Zap className="h-10 w-10 text-green-400 group-hover:scale-110 transition-transform duration-600" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-2">500+</div>
          <div className="text-gray-300 font-medium group-hover:text-green-300 transition-colors duration-400">Майнеров</div>
        </div>
        
        <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-8 border border-green-400/30 text-center hover:border-green-400/60 transition-all duration-700 hover:shadow-2xl hover:shadow-green-400/20 backdrop-blur-sm hover:scale-105 transform">
          <div className="p-3 bg-green-400/10 rounded-xl w-fit mx-auto mb-4">
            <Cpu className="h-10 w-10 text-green-400 group-hover:scale-110 transition-transform duration-600" />
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-2">2.5 EH/s</div>
          <div className="text-gray-300 font-medium group-hover:text-green-300 transition-colors duration-400">Общий хешрейт</div>
        </div>
      </section>
    </div>
  );
};

export default MiningPage;