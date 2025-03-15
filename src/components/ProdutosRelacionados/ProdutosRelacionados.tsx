import { useRef } from "react";
import "../../styles/produtos_relacionados.scss";
import api from "./api/produtos.json";
import arrowLeft from "../../images/icons/arrow-left.svg";
import arrowRight from "../../images/icons/arrow-right.svg";

function ProdutosRelacionados() {
    const carrosselRef = useRef<HTMLDivElement>(null);
    const produtos = api.products;

    const formatarPreco = (preco: number) => {
        return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const scroll = (direction: "left" | "right") => {
        if (carrosselRef.current) {
            const quantidadeScroll = 700;
            if (direction === "left") {
                carrosselRef.current.scrollBy({ left: -quantidadeScroll, behavior: "smooth" });
            } else {
                carrosselRef.current.scrollBy({ left: quantidadeScroll, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="produtos-relacionados">
            <button className="arrow" onClick={() => scroll("left")}><img src={arrowLeft} alt="" /></button>
            <div className="produtos" ref={carrosselRef}>
                {produtos.map((produto, index) => (
                    <div key={index} className="produto">
                        <img src={produto.photo} alt="" />
                        <div className="infos">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                            <div className="precos">
                                <p className="preco-antigo">R$ 30,90</p>
                                <p className="preco">R$ 28,90</p>
                                <p className="parcelas">ou 2x de R$ 49,95 sem juros</p>
                            </div>
                            <p className="frete">Frete grátis</p>
                        </div>
                        <button className="compra-btn">COMPRAR</button>
                    </div>
                ))}
            </div>
            <button className="arrow" onClick={() => scroll("right")}><img src={arrowRight} alt="" /></button>
        </div>
    );
}

export default ProdutosRelacionados;