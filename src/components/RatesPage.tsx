import React, { useState, useEffect, memo, useMemo } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Crown, Diamond, Star } from 'lucide-react';

const RatesPage: React.FC = memo(() => {
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const cryptoData = useMemo(() => [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250.50,
      change: 2.45,
      volume: '25.6B',
      marketCap: '850B',
      tier: 'premium'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2650.75,
      change: -1.23,
      volume: '15.2B',
      marketCap: '320B',
      tier: 'premium'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: 315.20,
      change: 0.85,
      volume: '1.8B',
      marketCap: '48B',
      tier: 'standard'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.48,
      change: -2.10,
      volume: '680M',
      marketCap: '16B',
      tier: 'standard'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 98.45,
      change: 5.67,
      volume: '2.1B',
      marketCap: '42B',
      tier: 'premium'
    },
    {
      symbol: 'XRP',
      name: 'Ripple',
      price: 0.62,
      change: -0.45,
      volume: '1.2B',
      marketCap: '34B',
      tier: 'standard'
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      price: 7.89,
      change: 1.23,
      volume: '450M',
      marketCap: '9.8B',
      tier: 'standard'
    },
    {
      symbol: 'DOGE',
      name: 'Dogecoin',
      price: 0.087,
      change: 8.45,
      volume: '890M',
      marketCap: '12B',
      tier: 'meme'
    },
  ], []);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setLastUpdate(new Date());
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${price.toLocaleString()}`;
    }
    return `$${price.toFixed(price < 1 ? 3 : 2)}`;
  };

  const topGainers = useMemo(() => 
    cryptoData.filter(crypto => crypto.change > 0).sort((a, b) => b.change - a.change),
    [cryptoData]
  );
  
  const topLosers = useMemo(() => 
    cryptoData.filter(crypto => crypto.change < 0).sort((a, b) => a.change - b.change),
    [cryptoData]
  );

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'premium': return Crown;
      case 'standard': return Star;
      default: return Diamond;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'premium': return 'text-yellow-400';
      case 'standard': return 'text-blue-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 optimized-transform">
      {/* Luxury Header */}
      <div className="relative flex justify-between items-center">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-30 hidden lg:block">
          <div className="relative">
            <img src="/rick.jpg" alt="Rick" className="w-32 h-32 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" />
            <Crown className="absolute -top-3 -right-3 h-10 w-10 text-yellow-400 sparkle" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold gold-text mb-6">
            Премиальные курсы
          </h1>
          <p className="text-gray-300 text-xl">
            Эксклюзивная аналитика для VIP клиентов
          </p>
        </div>
        <div className="text-right">
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 rounded-2xl hover:border-yellow-400/60 transition-all duration-700 hover:scale-110 transform backdrop-blur-sm glow-effect"
          >
            <RefreshCw className={`h-6 w-6 text-yellow-400 ${refreshing ? 'animate-spin' : ''}`} />
            <span className="text-yellow-400 font-bold">Обновить</span>
          </button>
          <p className="text-sm text-gray-400 mt-3">
            Обновлено: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Luxury Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Общая капитализация', value: '$1.75T', change: '+2.45%', positive: true, icon: Crown },
          { title: '24ч Объем', value: '$89.5B', change: '-1.23%', positive: false, icon: Diamond },
          { title: 'Доминация BTC', value: '48.6%', change: '+0.15%', positive: true, icon: Star },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-2xl p-8 border-3 diamond-border hover:glow-effect transition-all duration-700 hover:scale-110 transform backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-yellow-400">{item.title}</h3>
                <Icon className="h-6 w-6 text-yellow-400 sparkle" />
              </div>
              <div className="text-3xl font-bold gold-text mb-2">{item.value}</div>
              <div className="flex items-center space-x-2 text-sm">
                {item.positive ? (
                  <TrendingUp className="h-5 w-5 text-green-400" />
                ) : (
                  <TrendingDown className="h-5 w-5 text-red-400" />
                )}
                <span className={item.positive ? 'text-green-400' : 'text-red-400'}>
                  {item.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Luxury Top Gainers and Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative bg-gradient-to-br from-black/80 via-gray-900/50 to-green-900/20 rounded-2xl p-8 border-3 diamond-border overflow-hidden backdrop-blur-xl glow-effect">
          <div className="absolute top-4 right-4 opacity-30">
            <img src="/images.jpg" alt="Morty" className="w-12 h-12 object-cover rounded-full border-2 border-green-400/50 floating" />
          </div>
          <h3 className="text-2xl font-bold gold-text mb-6 flex items-center">
            <TrendingUp className="h-8 w-8 mr-3" />
            Лидеры роста
          </h3>
          <div className="space-y-4">
            {topGainers.slice(0, 5).map((crypto, index) => {
              const TierIcon = getTierIcon(crypto.tier);
              return (
                <div key={crypto.symbol} className="flex items-center justify-between p-4 bg-green-400/10 rounded-xl hover:bg-green-400/20 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full flex items-center justify-center">
                      <span className="text-green-400 font-bold">{crypto.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-bold">{crypto.symbol}</span>
                        <TierIcon className={`h-4 w-4 ${getTierColor(crypto.tier)}`} />
                      </div>
                      <div className="text-gray-400 text-sm">{crypto.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{formatPrice(crypto.price)}</div>
                    <div className="text-green-400 text-sm font-bold">+{crypto.change.toFixed(2)}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="relative bg-gradient-to-br from-black/80 via-gray-900/50 to-red-900/20 rounded-2xl p-8 border-3 diamond-border overflow-hidden backdrop-blur-xl glow-effect">
          <div className="absolute top-4 right-4 opacity-30">
            <img src="/rick.jpg" alt="Rick" className="w-12 h-12 object-cover rounded-full border-2 border-red-400/50 floating" />
          </div>
          <h3 className="text-2xl font-bold gold-text mb-6 flex items-center">
            <TrendingDown className="h-8 w-8 mr-3" />
            Лидеры падения
          </h3>
          <div className="space-y-4">
            {topLosers.slice(0, 5).map((crypto, index) => {
              const TierIcon = getTierIcon(crypto.tier);
              return (
                <div key={crypto.symbol} className="flex items-center justify-between p-4 bg-red-400/10 rounded-xl hover:bg-red-400/20 transition-all duration-500">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400/30 to-pink-500/30 rounded-full flex items-center justify-center">
                      <span className="text-red-400 font-bold">{crypto.symbol[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400 font-bold">{crypto.symbol}</span>
                        <TierIcon className={`h-4 w-4 ${getTierColor(crypto.tier)}`} />
                      </div>
                      <div className="text-gray-400 text-sm">{crypto.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">{formatPrice(crypto.price)}</div>
                    <div className="text-red-400 text-sm font-bold">{crypto.change.toFixed(2)}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Luxury Crypto Table */}
      <div className="bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-2xl border-3 diamond-border overflow-hidden backdrop-blur-xl glow-effect">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20">
              <tr>
                <th className="text-left p-6 text-yellow-400 font-bold text-lg">Актив</th>
                <th className="text-right p-6 text-yellow-400 font-bold text-lg">Цена</th>
                <th className="text-right p-6 text-yellow-400 font-bold text-lg">24ч %</th>
                <th className="text-right p-6 text-yellow-400 font-bold text-lg">Объем</th>
                <th className="text-right p-6 text-yellow-400 font-bold text-lg">Мар. кап.</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => {
                const TierIcon = getTierIcon(crypto.tier);
                return (
                  <tr key={crypto.symbol} className="border-t border-yellow-400/20 hover:bg-yellow-400/10 transition-all duration-500">
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full flex items-center justify-center">
                          <span className="text-yellow-400 font-bold text-lg">{crypto.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-400 font-bold text-lg">{crypto.symbol}</span>
                            <TierIcon className={`h-5 w-5 ${getTierColor(crypto.tier)}`} />
                          </div>
                          <div className="text-gray-400">{crypto.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-right text-yellow-400 font-bold text-lg">
                      {formatPrice(crypto.price)}
                    </td>
                    <td className="p-6 text-right">
                      <div className={`flex items-center justify-end space-x-2 ${
                        crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {crypto.change >= 0 ? (
                          <TrendingUp className="h-5 w-5" />
                        ) : (
                          <TrendingDown className="h-5 w-5" />
                        )}
                        <span className="font-bold">{crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%</span>
                      </div>
                    </td>
                    <td className="p-6 text-right text-gray-300 font-medium">{crypto.volume}</td>
                    <td className="p-6 text-right text-gray-300 font-medium">{crypto.marketCap}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

RatesPage.displayName = 'RatesPage';

export default RatesPage;