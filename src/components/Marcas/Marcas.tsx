import logo from '../../images/logo.svg'
import '../../styles/marcas.scss'

function Marcas() {
    return (
        <section className="navegue-marcas">
            <h2 className="title">Navegue por marcas</h2>
            <div className="logos-marcas">
                <div className="marca"><img src={logo} alt="" /></div>
                <div className="marca"><img src={logo} alt="" /></div>
                <div className="marca"><img src={logo} alt="" /></div>
                <div className="marca"><img src={logo} alt="" /></div>
                <div className="marca"><img src={logo} alt="" /></div>
            </div>
        </section>
    )
}

export default Marcas;