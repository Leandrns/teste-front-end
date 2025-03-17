import { useRef } from "react";
import "../../styles/produtos_relacionados.scss";
import api from "./api/produtos.json";
import arrowLeft from "../../images/icons/arrow-left.svg";
import arrowRight from "../../images/icons/arrow-right.svg";
import CardProduto from "./CardProduto/CardProduto";
import NavProdutos from "./NavProdutos/NavProdutos";

function ProdutosRelacionados() {
    const carrosselRef = useRef<HTMLDivElement>(null);
    const produtos = api.products;

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
        <section className="produtos-relacionados">
            <h2 className="title">Produtos relacionados</h2>
            <NavProdutos />
            <div className="carrossel">
                <button className="arrow" onClick={() => scroll("left")}><img src={arrowLeft} alt="" /></button>
                <div className="produtos" ref={carrosselRef}>
                    {produtos.map((produto, index) => (
                        <CardProduto key={index} 
                                    foto={produto.photo} 
                                    nome={produto.productName} 
                                    descricao={produto.descriptionShort} 
                                    preco={produto.price}/>
                    ))}
                </div>
                <button className="arrow" onClick={() => scroll("right")}><img src={arrowRight} alt="" /></button>
            </div>
        </section>
    );
}

export default ProdutosRelacionados;