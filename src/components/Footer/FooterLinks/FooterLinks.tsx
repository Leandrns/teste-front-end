
type fotterLinksProps = {
    title: string;
    textLinks: string[];
}

function FooterLinks({ title, textLinks }: fotterLinksProps) {
    return (
        <div className="footer-links">
            <h3 className="title">{title}</h3>
            {textLinks.map((textLink, index) => (
                <a key={index} href=".">{textLink}</a>
            ))}
        </div>
    );
}

export default FooterLinks;