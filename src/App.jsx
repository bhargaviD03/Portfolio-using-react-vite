import './App.css'
import './index.css'
import { Header } from './common/Header'
import { Footer } from './common/Footer'
import About from './pages/about'
import Dowhat from './pages/Dowhat'
// import Tech from './pages/Tech'
function App() {

  return (
    <>
    <Header />
    <About />
    <Dowhat />
    {/* <Tech /> */}
    <Footer />
    </>
  )
}

export default App
