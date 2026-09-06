import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
