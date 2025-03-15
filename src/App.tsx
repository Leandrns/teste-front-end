import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ProdutosRelacionados from './components/ProdutosRelacionados/ProdutosRelacionados';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProdutosRelacionados />
    </div>
  );
}

export default App;
