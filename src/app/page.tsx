import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="gradient-mesh">
      <Navbar />
      <Hero />
      <div className="amber-line" />
      <About />
      <div className="amber-line" />
      <MissionVision />
      <div className="amber-line" />
      <Services />
      <div className="amber-line" />
      <Values />
      <div className="amber-line" />
      <Contact />
      <Footer />
    </main>
  );
}
