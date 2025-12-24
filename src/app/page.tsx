import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactModal from "../components/ContactModal";
import AboutMe from "../components/AboutMe";
import ScrambleModal from "../components/ScrambleModal";

const Home = () => {
  return (
    <div
      className="min-h-screen relative selection:bg-hud-green/30 bg-background"
    >
      <Navbar />

      <Hero />

      <ContactModal />
      <AboutMe />
      <ScrambleModal />

      <Footer />
    </div>
  );
};

export default Home;
