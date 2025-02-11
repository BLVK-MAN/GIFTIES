import "../styles/HomePage.css"
import { Search, Gift, Truck } from "lucide-react"

const HomePage = () => {
  const categories = [
    {
      name: "Pour Elle",
      image:
        "src/assets/9a4ac08cd722294447afefd631b3a1c8.jpg",
    },
    {
      name: "Pour Lui",
      image:
        "src/assets/2fa8395408dd5ef02a78ecd399ff25e6.jpg",
    },
    {
      name: "Maison",
      image:
        "src/assets/e9a5252e48531785255b1bc158d38247.jpg",
    },
    {
      name: "High-Tech",
      image:
        "src/assets/0ea6843c325d35d71994a829bd413a62.jpg",
    },
    {
      name: "Enfants",
      image:
        "src/assets/c9a320b04cfc6a0dfb55888bbafdcf0b.jpg",
    },
    {
      name: "Insolite",
      image:
        "src/assets/97462a6666d4cd3678cb405ebd7cee55.jpg",
    },
  ]

  const trendingProducts = [
    {
      name: "Mug personnalisé",
      price: 14.99,
      image:
        "src/assets/0f792ff85a86c5cea8b0c35b2f7efe5d.jpg",
    },
    {
      name: "Cadre photo LED",
      price: 29.99,
      image:
        "src/assets/videoframe_12473.png",
    },
    {
      name: "Plante en lévitation",
      price: 79.99,
      image:
        "src/assets/345c840e36f3de33210de08c7a7dde65.jpg",
    },
    {
      name: "Enceinte Bluetooth",
      price: 49.99,
      image:
        "src/assets/def56c11938fddfe6f0f6fb6f80f2ae3.jpg",
    },
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Des cadeaux uniques pour toutes les occasions</h1>
          <p>Trouvez le cadeau parfait parmi notre sélection originale</p>
          <div className="search-bar">
            <input type="text" placeholder="Rechercher un cadeau..." />
            <button>
              <Search size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Catégories populaires</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <img src={category.image || "/placeholder.svg"} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <Gift size={40} />
          <h3>Cadeaux uniques</h3>
          <p>Des idées originales pour tous les goûts</p>
        </div>
        <div className="feature">
          <Truck size={40} />
          <h3>Livraison rapide</h3>
          <p>Recevez vos cadeaux en 24/48h</p>
        </div>
        <div className="feature">
          <Search size={40} />
          <h3>Facile à trouver</h3>
          <p>Utilisez notre moteur de recherche avancé</p>
        </div>
      </section>

      <section className="trending">
        <h2>Tendances du moment</h2>
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toFixed(2)} €</p>
              <button>Ajouter au panier</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage

