import styles from "./App.module.css";
import { About } from "./components navbar/About/About";
import { Contact } from "./components navbar/Contact/Contact";
import { Experience } from "./components navbar/Experience/Experience";
import { Hero } from "./components navbar/Hero/Hero";
import { Navbar } from "./components navbar/Navbar/Navbar";
import { Projects } from "./components navbar/Projects/Projects";

function App() {
  return (<div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
  );
}

export default App
