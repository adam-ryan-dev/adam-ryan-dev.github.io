import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Offer from "./Offer";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <Hero />
      <div className="m-10">
        <About />
        <Offer />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default Home;
