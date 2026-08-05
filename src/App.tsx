import { LanguageProvider } from "./i18n/LanguageContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Academic from "./components/Academic"
import Internships from "./components/Experience"
import Content from "./components/Content"
import FunFacts from "./components/FunFacts"
import Footer from "./components/Footer"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <Academic />
          <Internships />
          <Content />
          <FunFacts />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
