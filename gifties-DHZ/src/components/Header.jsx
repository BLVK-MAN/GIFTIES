import "../styles/Header.css"
import logo from "../assets/gifties-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="Gifties Gift Shop" className="logo" />
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/catalogue">Catalogue</a>
            </li>
            <li>
              <a href="/personnalisation">Personnalisation</a>
            </li>
            <li>
              <a href="/panier">Panier</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

