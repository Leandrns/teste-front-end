import { useState } from "react";

type modalProps = {
    foto: string;
    nome: string;
    descricao: string;
    preco: number;
    toggleModal: () => void;
}

function Modal({ foto, nome, descricao, preco, toggleModal}: modalProps) {
    const [quantidade, setQuantidade] = useState<number>(1)

    const formatarPreco = (preco: number) => {
        return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <div className="modal-container">
            <div className="modal-content">
                <button className="fechar" onClick={toggleModal}>✕</button>
                <img src={foto} alt="" />
                <div className="detalhes">
                    <div className="nome-preco">
                        <h3 className="nome">{nome}</h3>
                        <p className="preco">{formatarPreco(preco)}</p>
                    </div>
                    <div className="descricao">
                        <p className="texto">{descricao}</p>
                        <a href="."><p className="mais-detalhes">Veja mais detalhes do produto ᐳ</p></a>
                    </div>
                    <div className="comprar">
                        <div className="quantidade">
                            <button onClick={() => quantidade > 1 ? setQuantidade(quantidade - 1) : setQuantidade(quantidade)}>-</button>
                            <p className="valor-quantidade">{quantidade}</p>
                            <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
                        </div>
                        <button className="btn-comprar-modal">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;