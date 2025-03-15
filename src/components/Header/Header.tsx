import "../../styles/header.scss";
import InfoLoja from "./InfoLoja/InfoLoja";
import security from "../../images/icons/security.svg";
import truck from "../../images/icons/truck.svg";
import creditCard from "../../images/icons/credit-card.svg";
import heart from "../../images/icons/heart.svg";
import userCircle from "../../images/icons/user-circle.svg";
import shoppingCart from "../../images/icons/shopping-cart.svg";
import packageIcon from "../../images/icons/package.svg";
import logo from "../../images/logo.svg";
import search from "../../images/icons/search.svg";
import NavLoja from "./NavLoja/NavLoja";

function Header() {
    const iconsHeader = [packageIcon, heart, userCircle, shoppingCart];

    return (
        <header>
            <ul className="infos-loja">
                <InfoLoja icon={security} text={"Compras 100% seguras"} />
                <InfoLoja icon={truck} text={"Frete grátis acima de R$ 200"} />
                <InfoLoja icon={creditCard} text={"Parcele suas compras"} />
            </ul>
            <div className="main-header">
                <a href="" className="logo"><img src={logo} alt="" /></a>
                <div className="search">
                    <input type="text" className="input-search" placeholder="O que está buscando?"/>
                    <button><img src={search} alt="" /></button>
                </div>
                <div className="icons-header">
                    {iconsHeader.map((icon, index) => (
                        <a href="" key={index}>
                            <img src={icon} alt="" className="icon-header" />
                        </a>))}
                </div>
            </div>
            <NavLoja />
        </header>
    );
}

export default Header;