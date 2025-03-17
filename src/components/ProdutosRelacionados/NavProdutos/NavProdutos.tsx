function NavProdutos() {
    const tiposProdutos = ["CELULARES", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"]

    return (
        <ul className="nav-produtos">
            {tiposProdutos.map((tipoProduto) => (
                <li className="tipo-produto">{tipoProduto}</li>
            ))}
        </ul>
    )
}

export default NavProdutos;