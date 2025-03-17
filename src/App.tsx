import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ProdutosRelacionados from './components/ProdutosRelacionados/ProdutosRelacionados';
import Departamentos from './components/Departamentos/Departamentos';
import Parceiros from './components/Parceiros/Parceiros';
import Marcas from './components/Marcas/Marcas';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Departamentos />
      <ProdutosRelacionados navProdutosOpen={true} />
      <div className="duo-parceiros">
        <Parceiros />
        <Parceiros />
      </div>
      <ProdutosRelacionados navProdutosOpen={false} />
      <div className="duo-parceiros">
        <Parceiros />
        <Parceiros />
      </div>
      <Marcas />
      <ProdutosRelacionados navProdutosOpen={false} />
      <Footer />
    </div>
  );
}

export default App;
