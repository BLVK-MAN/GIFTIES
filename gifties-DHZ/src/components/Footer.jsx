import "../styles/Footer.css"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À propos de Gifties</h3>
          <p>Gifties est votre destination pour des cadeaux personnalisés uniques.</p>
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li>
              <a href="/a-propos">À propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Gifties. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer

