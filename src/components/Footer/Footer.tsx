import '../../styles/footer.scss';
import FooterLinks from './FooterLinks/FooterLinks';
import Newsletter from './Newsletter/Newsletter';
import logo from '../../images/logo.svg';
import instagram from '../../images/icons/instagram.svg';
import facebook from '../../images/icons/facebook.svg';
import linkedin from '../../images/icons/linkedin.svg';

function Footer() {
    return (
        <footer>
            <Newsletter />
            <div className="footer-content">
                <div className="logo-media">
                    <img src={logo} alt="" className='logo' />
                    <p className='text-empresa'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="media-icons">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="divisor-line"></div>
                <div className="container-footer-links">
                    <FooterLinks title='Institucional' textLinks={["Sobre Nós", "Movimento", "Trabalhe conosco"]}/>
                    <FooterLinks title='Ajuda' textLinks={["Suporte", "Fale Conosco", "Perguntas Frequentes"]}/>
                    <FooterLinks title='Termos' textLinks={["Termos e Condições", "Política de Privacidade", "Troca e Devolução"]}/>
                </div>
            </div>
            <p className='direitos-autorais'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </footer>
    );
}

export default Footer;