import Hero from "../components/Hero";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FlareLayer from "../components/FlareLayer";
import ContactModal from "../components/ContactModal";
import AboutMe from "../components/AboutMe";
import ScrambleModal from "../components/ScrambleModal";

const Home = () => {
  return (
    <main
      className="min-h-screen relative selection:bg-hud-green/30 bg-background"
    >
      <CustomCursor />
      <FlareLayer />

      <Navbar />

      <Hero />

      {/* Popovers are hidden by default and handled by the browser */}
      <ContactModal onClose={() => { }} />
      <AboutMe />
      <ScrambleModal onClose={() => { }} onOpenContact={() => { }} />

      <Footer />
    </main>
  );
};

export default Home;
