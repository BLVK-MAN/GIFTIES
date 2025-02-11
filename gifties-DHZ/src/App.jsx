import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import "./styles/App.css"

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App

