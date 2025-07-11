import React, { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import MiningPage from './components/MiningPage';
import RatesPage from './components/RatesPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'mining':
        return <MiningPage />;
      case 'rates':
        return <RatesPage />;
      case 'shop':
        return <ShopPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;