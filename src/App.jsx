import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import More from "./components/More"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Mera from "./components/Mera"

function App() {
 
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <More/>
     <Pricing/>
     <Contact/>
     <Footer/>
     <Mera name1="soul" name2="aatma" />
    </>
  )
}

export default App
