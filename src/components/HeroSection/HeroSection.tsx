import "../../styles/hero.scss"

function HeroSection() {
    return (
        <section className="hero-section">
            <div className='hero-content'>
                <div className="texts">
                    <h1>Venha conhecer nossas promoções</h1>
                    <h2><span>50% Off</span> nos produtos</h2>
                </div>
                <button>Ver produto</button>
            </div>
        </section>
    );
}

export default HeroSection;