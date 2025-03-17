import '../../styles/departamentos.scss';
import supermarket from '../../images/icons/supermarket.svg';
import technology from '../../images/icons/technology.svg';
import drinks from '../../images/icons/drinks.svg';
import tools from '../../images/icons/tools.svg';
import health from '../../images/icons/health.svg';
import fitness from '../../images/icons/fitness.svg';
import fashion from '../../images/icons/fashion.svg';

function Departamentos() {
    const iconsDepartamentos = [technology, supermarket, drinks, tools, health, fitness, fashion];
    const departamentos = ["Tecnologia", "Supermercado", "Bebidas", "Ferramentas", "Saúde", "Fitness", "Moda"];

    return (
        <div className="departamentos">
            {departamentos.map((departamento, index) => (
                <div className="card-departamento">
                    <div className="icon-departamento">
                        <img src={iconsDepartamentos[index]} alt="" />
                    </div>
                    <p>{departamento}</p>
                </div>
            ))}
        </div>
    );
}

export default Departamentos;