import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Projects from './Components/Projects/Projects'
import Service from './Components/Service/Service'
import Skills from './Components/Skills/Skills'
function App() {

  return (
    <>
      <div className="Header_wrapper">
        <Nav/>
        <Header/>
      </div>

        <Service/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
    </>
  )
}

export default App
