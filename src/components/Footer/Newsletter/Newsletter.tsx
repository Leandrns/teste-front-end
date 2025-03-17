function Newsletter() {
    return (
        <div className="newsletter">
            <div className="texts">
                <h2>Inscreva-se na nossa newsletter</h2>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <form>
                <div className="inputs-btn">
                    <input type="text" placeholder="Digite seu nome..." />
                    <input type="email" placeholder="Digite seu e-mail..." />
                    <button type="submit">INSCREVER</button>
                </div>
                <input type="checkbox" /><span> Aceito os termos e condições</span>
            </form>
        </div>
    );
}

export default Newsletter;