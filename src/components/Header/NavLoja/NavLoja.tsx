function NavLoja() {
  const optionsNav = ["TODAS CATEGORIAS", "SUPERMERCADO", "LIVROS", "MODA", "LANÇAMENTOS", "OFERTAS DO DIA", "ASSINATURA"]
  return (
    <nav className="nav-loja">
      {optionsNav.map((option, index) => (
        <a href="" key={index}>{option}</a>
      ))}
    </nav>
  );
}

export default NavLoja;