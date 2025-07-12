import React, { useState, memo, useMemo, useCallback } from 'react';
import { ShoppingCart, Star, Zap, Shield, Cpu, HardDrive, Plus, Minus, Crown, Diamond, Gem } from 'lucide-react';

const ShopPage: React.FC = memo(() => {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const products = useMemo(() => [
    {
      id: 'antminer-s19-pro-elite',
      name: 'Antminer S19 Pro Elite',
      price: 24999,
      image: '/rick.jpg',
      rating: 4.9,
      reviews: 156,
      specs: {
        hashRate: '110 TH/s',
        power: '3250W',
        efficiency: '29.5 J/TH',
        warranty: '3 Years VIP'
      },
      description: 'Эксклюзивная модель с расширенной гарантией и приоритетной поддержкой',
      inStock: true,
      category: 'miners',
      tier: 'luxury'
    },
    {
      id: 'rtx-4090-titan-rig',
      name: 'RTX 4090 Titan Mining Rig',
      price: 18999,
      image: '/images.jpg',
      rating: 4.8,
      reviews: 89,
      specs: {
        hashRate: '120 MH/s',
        power: '450W',
        memory: '24GB GDDR6X',
        cooling: 'Liquid Cooled'
      },
      description: 'Премиальная система с жидкостным охлаждением и кастомной прошивкой',
      inStock: true,
      category: 'gpu',
      tier: 'premium'
    },
    {
      id: 'wallet-diamond-vault',
      name: 'Diamond Vault Hardware Wallet',
      price: 1499,
      image: '/rick.jpg',
      rating: 5.0,
      reviews: 234,
      specs: {
        coins: '1000+',
        screen: 'OLED Touch',
        connectivity: 'USB-C + Wireless',
        security: 'Military Grade'
      },
      description: 'Роскошный аппаратный кошелек с биометрической защитой',
      inStock: true,
      category: 'wallets',
      tier: 'luxury'
    },
    {
      id: 'mining-facility-sovereign',
      name: 'Sovereign Mining Facility',
      price: 499999,
      image: '/images.jpg',
      rating: 5.0,
      reviews: 12,
      specs: {
        capacity: '1000 ASIC',
        cooling: 'Immersion + AI',
        power: '5MW',
        monitoring: 'Quantum Analytics'
      },
      description: 'Частная майнинг-ферма с квантовой аналитикой и AI управлением',
      inStock: false,
      category: 'farms',
      tier: 'exclusive'
    },
    {
      id: 'psu-platinum-elite',
      name: 'Platinum Elite PSU 2000W',
      price: 2999,
      image: '/rick.jpg',
      rating: 4.7,
      reviews: 78,
      specs: {
        power: '2000W',
        efficiency: '96% Titanium',
        modular: 'Fully Modular',
        warranty: 'Lifetime'
      },
      description: 'Титановый блок питания с пожизненной гарантией',
      inStock: true,
      category: 'accessories',
      tier: 'premium'
    },
    {
      id: 'cooling-quantum-system',
      name: 'Quantum Cooling System',
      price: 39999,
      image: '/images.jpg',
      rating: 4.9,
      reviews: 23,
      specs: {
        capacity: '50 GPU',
        fluid: 'Quantum Dielectric',
        temperature: '-60°C',
        efficiency: '+50% Performance'
      },
      description: 'Революционная система квантового охлаждения для максимальной производительности',
      inStock: true,
      category: 'cooling',
      tier: 'exclusive'
    }
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'Все товары', icon: ShoppingCart },
    { id: 'miners', name: 'ASIC майнеры', icon: Cpu },
    { id: 'gpu', name: 'GPU фермы', icon: HardDrive },
    { id: 'wallets', name: 'Кошельки', icon: Shield },
    { id: 'accessories', name: 'Аксессуары', icon: Zap },
  ], []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const addToCart = useCallback((productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  }, []);

  const getCartTotal = useCallback(() => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  }, [cart, products]);

  const getCartItemsCount = useCallback(() => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [products, selectedCategory, sortBy]);

  const getTierGradient = (tier: string) => {
    switch (tier) {
      case 'premium': return 'from-blue-500 to-cyan-500';
      case 'luxury': return 'from-yellow-400 to-orange-500';
      case 'exclusive': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'premium': return Star;
      case 'luxury': return Crown;
      case 'exclusive': return Diamond;
      default: return Gem;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 optimized-transform">
      {/* Luxury Header */}
      <div className="relative text-center">
        <div className="absolute -top-12 left-12 opacity-30 hidden lg:block">
          <div className="relative">
            <img src="/rick.jpg" alt="Rick" className="w-28 h-28 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" />
            <Crown className="absolute -top-3 -right-3 h-8 w-8 text-yellow-400 sparkle" />
          </div>
        </div>
        <div className="absolute -top-12 right-12 opacity-30 hidden lg:block">
          <div className="relative">
            <img src="/images.jpg" alt="Morty" className="w-28 h-28 object-cover rounded-full border-4 diamond-border shadow-2xl glow-effect floating" style={{ animationDelay: '2s' }} />
            <Diamond className="absolute -top-3 -right-3 h-8 w-8 text-cyan-400 sparkle" />
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold gold-text mb-8">
          Элитный Магазин
        </h1>
        <p className="text-gray-300 text-2xl max-w-3xl mx-auto leading-relaxed">
          Эксклюзивное оборудование для самых требовательных клиентов
        </p>
      </div>

      {/* Luxury Shopping Cart Summary */}
      {getCartItemsCount() > 0 && (
        <div className="relative bg-gradient-to-br from-yellow-400/20 via-black/80 to-orange-500/20 rounded-3xl p-8 border-3 diamond-border backdrop-blur-xl glow-effect">
          <div className="absolute top-6 right-6 opacity-40">
            <div className="relative">
              <img src="/rick.jpg" alt="Rick" className="w-16 h-16 object-cover rounded-full border-3 diamond-border shadow-2xl floating" />
              <Crown className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 sparkle" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-2xl">
                <ShoppingCart className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gold-text">VIP Корзина</h3>
                <p className="text-gray-300 text-lg">{getCartItemsCount()} эксклюзивных товаров</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold gold-text mb-2">
                ${getCartTotal().toLocaleString()}
              </div>
              <button className="luxury-gradient text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-110 transition-all duration-700 shadow-2xl glow-effect">
                Оформить VIP заказ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Luxury Filters */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Categories */}
        <div className="lg:w-1/4">
          <h3 className="text-2xl font-bold gold-text mb-6">Категории</h3>
          <div className="space-y-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-700 hover:scale-105 transform ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400/30 to-orange-500/20 text-yellow-400 border-2 border-yellow-400/60 glow-effect'
                      : 'bg-gradient-to-br from-black/60 via-gray-900/40 to-purple-900/20 text-gray-300 border-2 border-yellow-400/20 hover:border-yellow-400/40 hover:bg-yellow-400/10 backdrop-blur-sm'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products */}
        <div className="lg:w-3/4">
          {/* Sort */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold gold-text">
              {selectedCategory === 'all' ? 'Все товары' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 bg-black/60 border-2 border-yellow-400/30 rounded-2xl text-yellow-400 focus:border-yellow-400 focus:outline-none transition-all duration-700 backdrop-blur-sm glow-effect"
            >
              <option value="name">По названию</option>
              <option value="price-low">Цена: по возрастанию</option>
              <option value="price-high">Цена: по убыванию</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredProducts.map((product) => {
              const TierIcon = getTierIcon(product.tier);
              const gradient = getTierGradient(product.tier);
              return (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-black/80 via-gray-900/50 to-purple-900/30 rounded-3xl border-3 diamond-border hover:glow-effect transition-all duration-700 hover:scale-105 transform overflow-hidden backdrop-blur-xl"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-red-400 font-bold text-xl">Под заказ</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 font-bold">{product.rating}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <TierIcon className={`h-8 w-8 text-yellow-400 sparkle`} />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold gold-text mb-3 group-hover:scale-105 transition-all duration-700">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{product.description}</p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">{key}:</span>
                          <span className="text-yellow-400 font-bold">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-3xl font-bold gold-text">
                        ${product.price.toLocaleString()}
                      </div>
                      <div className="text-gray-400">
                        {product.reviews} отзывов
                      </div>
                    </div>

                    {/* Cart Controls */}
                    {cart[product.id] ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-3 bg-red-400/20 text-red-400 rounded-xl hover:bg-red-400/30 transition-all duration-700 hover:scale-110 transform"
                          >
                            <Minus className="h-5 w-5" />
                          </button>
                          <span className="text-yellow-400 font-bold text-2xl min-w-[3rem] text-center">
                            {cart[product.id]}
                          </span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="p-3 bg-green-400/20 text-green-400 rounded-xl hover:bg-green-400/30 transition-all duration-700 hover:scale-110 transform"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="text-yellow-400 font-bold text-xl">
                          ${(product.price * cart[product.id]).toLocaleString()}
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product.id)}
                        disabled={!product.inStock}
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-700 hover:scale-105 transform ${
                          product.inStock
                            ? 'luxury-gradient text-black hover:shadow-2xl glow-effect'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Добавить в VIP корзину' : 'Под заказ'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

ShopPage.displayName = 'ShopPage';

export default ShopPage;