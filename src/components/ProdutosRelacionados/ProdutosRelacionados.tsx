import {useRef} from "react";
import "../../styles/produtos_relacionados.scss";
import api from "./api/produtos.json";

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
        <div className="produtos-relacionados">
            <button className="arrow" onClick={() => scroll("left")}>⬅</button>
            <div className="produtos" ref={carrosselRef}>
                {produtos.map((produto, index) => (
                    <div key={index} className="produto">
                        <img src={produto.photo} alt="" />
                        <h3>{produto.productName}</h3>
                        <p>{produto.descriptionShort}</p>
                        <p className="preco">{produto.price}</p>
                    </div>
                ))}
            </div>
            <button className="arrow" onClick={() => scroll("right")}>➡</button>
        </div>
    );
}

export default ProdutosRelacionados;