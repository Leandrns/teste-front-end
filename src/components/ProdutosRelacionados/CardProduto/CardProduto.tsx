import { useState } from "react";
import Modal from "../Modal/Modal";

type cardProdutoProps = {
    foto: string;
    nome: string;
    descricao: string;
    preco: number;
}

function CardProduto({ foto, nome, descricao, preco }: cardProdutoProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="produto">
            <img src={foto} alt="" />
            <div className="infos">
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div className="precos">
                    <p className="preco-antigo">R$ 30,90</p>
                    <p className="preco">R$ 28,90</p>
                    <p className="parcelas">ou 2x de R$ 49,95 sem juros</p>
                </div>
                <p className="frete">Frete grátis</p>
            </div>
            <button className="compra-btn" onClick={toggleModal}>COMPRAR</button>
            {isOpen && (
                <Modal foto={foto}
                        nome={nome}
                        descricao={descricao}
                        preco={preco}
                        toggleModal={toggleModal} />
            )}
        </div>
    )
}

export default CardProduto;
