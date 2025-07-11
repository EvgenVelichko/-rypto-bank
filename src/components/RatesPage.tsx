import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

const RatesPage: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const cryptoData = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 43250.50,
      change: 2.45,
      volume: '25.6B',
      marketCap: '850B',
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 2650.75,
      change: -1.23,
      volume: '15.2B',
      marketCap: '320B',
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: 315.20,
      change: 0.85,
      volume: '1.8B',
      marketCap: '48B',
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.48,
      change: -2.10,
      volume: '680M',
      marketCap: '16B',
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: 98.45,
      change: 5.67,
      volume: '2.1B',
      marketCap: '42B',
    },
    {
      symbol: 'XRP',
      name: 'Ripple',
      price: 0.62,
      change: -0.45,
      volume: '1.2B',
      marketCap: '34B',
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      price: 7.89,
      change: 1.23,
      volume: '450M',
      marketCap: '9.8B',
    },
    {
      symbol: 'DOGE',
      name: 'Dogecoin',
      price: 0.087,
      change: 8.45,
      volume: '890M',
      marketCap: '12B',
    },
  ];

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

  const topGainers = cryptoData.filter(crypto => crypto.change > 0).sort((a, b) => b.change - a.change);
  const topLosers = cryptoData.filter(crypto => crypto.change < 0).sort((a, b) => a.change - b.change);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="relative flex justify-between items-center">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-15 hidden lg:block">
          <img src="/rick.jpg" alt="Rick" className="w-24 h-24 object-cover rounded-full border-2 border-green-400/30" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-green-400 mb-4">
            Курсы криптовалют
          </h1>
          <p className="text-gray-300">
            Актуальные цены на популярные криптовалюты
          </p>
        </div>
        <div className="text-right">
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-2 px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-500 hover:scale-105 transform"
          >
            <RefreshCw className={`h-4 w-4 text-green-400 ${refreshing ? 'animate-spin' : ''}`} />
            <span className="text-green-400">Обновить</span>
          </button>
          <p className="text-xs text-gray-400 mt-2">
            Обновлено: {lastUpdate.toLocaleTimeString()}
          </p>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 transform">
          <h3 className="text-lg font-semibold text-green-400 mb-2">Общая капитализация</h3>
          <div className="text-2xl font-bold text-green-400">$1.75T</div>
          <div className="flex items-center space-x-1 text-sm">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-green-400">+2.45%</span>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-lg p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 transform">
          <h3 className="text-lg font-semibold text-green-400 mb-2">24ч Объем</h3>
          <div className="text-2xl font-bold text-green-400">$89.5B</div>
          <div className="flex items-center space-x-1 text-sm">
            <TrendingDown className="h-4 w-4 text-red-400" />
            <span className="text-red-400">-1.23%</span>
          </div>
        </div>
        
        <div className="bg-gray-900/50 rounded-lg p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 transform">
          <h3 className="text-lg font-semibold text-green-400 mb-2">Доминация BTC</h3>
          <div className="text-2xl font-bold text-green-400">48.6%</div>
          <div className="flex items-center space-x-1 text-sm">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <span className="text-green-400">+0.15%</span>
          </div>
        </div>
      </div>

      {/* Top Gainers and Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative bg-gray-900/50 rounded-lg p-6 border border-green-400/20 overflow-hidden">
          <div className="absolute top-2 right-2 opacity-20">
            <img src="/images.jpg" alt="Morty" className="w-10 h-10 object-cover rounded-full border border-green-400/30" />
          </div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Лидеры роста</h3>
          <div className="space-y-3">
            {topGainers.slice(0, 5).map((crypto, index) => (
              <div key={crypto.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold text-sm">{crypto.symbol[0]}</span>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold">{crypto.symbol}</div>
                    <div className="text-gray-400 text-sm">{crypto.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{formatPrice(crypto.price)}</div>
                  <div className="text-green-400 text-sm">+{crypto.change.toFixed(2)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative bg-gray-900/50 rounded-lg p-6 border border-green-400/20 overflow-hidden">
          <div className="absolute top-2 right-2 opacity-20">
            <img src="/rick.jpg" alt="Rick" className="w-10 h-10 object-cover rounded-full border border-green-400/30" />
          </div>
          <h3 className="text-lg font-semibold text-green-400 mb-4">Лидеры падения</h3>
          <div className="space-y-3">
            {topLosers.slice(0, 5).map((crypto, index) => (
              <div key={crypto.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-400/20 rounded-full flex items-center justify-center">
                    <span className="text-red-400 font-bold text-sm">{crypto.symbol[0]}</span>
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold">{crypto.symbol}</div>
                    <div className="text-gray-400 text-sm">{crypto.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-semibold">{formatPrice(crypto.price)}</div>
                  <div className="text-red-400 text-sm">{crypto.change.toFixed(2)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crypto Table */}
      <div className="bg-gray-900/50 rounded-lg border border-green-400/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left p-4 text-green-400 font-semibold">Монета</th>
                <th className="text-right p-4 text-green-400 font-semibold">Цена</th>
                <th className="text-right p-4 text-green-400 font-semibold">24ч %</th>
                <th className="text-right p-4 text-green-400 font-semibold">Объем</th>
                <th className="text-right p-4 text-green-400 font-semibold">Мар. кап.</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={crypto.symbol} className="border-t border-green-400/10 hover:bg-green-400/5 transition-all duration-400">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 font-bold">{crypto.symbol[0]}</span>
                      </div>
                      <div>
                        <div className="text-green-400 font-semibold">{crypto.symbol}</div>
                        <div className="text-gray-400 text-sm">{crypto.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right text-green-400 font-semibold">
                    {formatPrice(crypto.price)}
                  </td>
                  <td className="p-4 text-right">
                    <div className={`flex items-center justify-end space-x-1 ${
                      crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {crypto.change >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right text-gray-300">{crypto.volume}</td>
                  <td className="p-4 text-right text-gray-300">{crypto.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RatesPage;