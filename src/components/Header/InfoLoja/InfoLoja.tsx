type InfoLojaProps = {
    icon: string;
    text: string;
}

function InfoLoja({ icon, text }: InfoLojaProps) {
    return (
        <li className="info">
            <img src={icon} alt="" />
            <p>{text}</p>
        </li>
    );
}

export default InfoLoja;