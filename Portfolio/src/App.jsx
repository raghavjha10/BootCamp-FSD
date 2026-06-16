import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;