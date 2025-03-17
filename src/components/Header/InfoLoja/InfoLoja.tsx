import security from "../../../images/icons/security.svg";
import truck from "../../../images/icons/truck.svg";
import creditCard from "../../../images/icons/credit-card.svg";

function InfoLoja() {
    return (
        <ul className="infos-loja">
            <li className="info">
                <img src={security} alt="" />
                <p>Compra <span>100% segura</span></p>
            </li>
            <li className="info">
                <img src={truck} alt="" />
                <p><span>Frete grátis</span> acima de R$ 200</p>
            </li>
            <li className="info">
                <img src={creditCard} alt="" />
                <p><span>Parcele</span> suas compras</p>
            </li>
        </ul>
    );
}

export default InfoLoja;