//Nous avons mis les différents liens vers nos pages que l'on retrouve dans notre Footer.
//Nous avons également mis les liens vers nos réseaux sociaux.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="newsletter-social-links">
                <div className="newsletter-social">
                    <div className="footer-newsletter">
                        <label htmlFor="newsletter-email">Newsletter:</label>
                        <input type="email" id="newsletter-email" placeholder="Entrez votre adresse email" />
                    </div>

                    <div className="footer-social">
                        <a href="https://facebook.com/green-roots" aria-label="liens facebook" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a href="https://instagram.com/green-roots" aria-label="liens instagram" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a href="https://tiktok.com/green-roots" aria-label="liens tiktok" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'tiktok']} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <a href="/contact">Contact</a>
                    <a href="/mentions-legales">Mentions Légales</a>
                    <a href="/a-propos">À propos</a>
                    <a href="/accessibilite">Accessibilité</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Green-Roots 2024 - Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
