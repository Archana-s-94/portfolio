import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import About from "./components/About/about";
import Education from "./components/Education/education";
import Experiences from "./components/Experiences/experiences";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <About />
      <Education />
      <Experiences />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
