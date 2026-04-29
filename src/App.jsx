import Footer from "./layout/Footer"
import Navbar from "./layout/Navbar"
import { About } from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import { Hero } from "./sections/Hero"
import Projects from "./sections/Projects"
import Testmionails from "./sections/Testmionails"

function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />
          <About />
          {/* //experiences=eduation */}
          <Experience />  
          <Projects />
          <Testmionails />
          <Contact />
        </main>
        
        <Footer/>
      </div>
    </>
  )
}

export default App




//i does not add stars in bg 49:00
// not- add scroll fix nav bar
// id does not add animation on download cv button 1:03