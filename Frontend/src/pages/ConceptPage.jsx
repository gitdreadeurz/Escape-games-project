import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import conceptImage from '../assets/concept.webp';
import heroImage from '../assets/heroConcept.webp';
import { useEffect} from "react";


function ConceptPage() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

  return (
    <div className="page">
      <Navbar />

      <main className="concept-page">
        <img src={heroImage} alt="Hero Concept" className="concept-hero" />

        <section className="concept-section">
          <h1>Le concept</h1>

          <div className="concept-image">
            <img src={conceptImage} alt="Concept Escape Game" />
          </div>

          <p className="concept-description">
           Créé en 2022 à Lille par cinq passionnés d'énigmes, cet escape game propose 
                    une expérience immersive basée sur plusieurs salles aux univers variés, chacune 
                    remplie de défis à relever en équipe. Les joueurs peuvent vivre l'aventure sur 
                    place dans des décors conçus pour l'immersion, ou directement chez eux grâce 
                    à une version mobile adaptable à tout type d'espace. Dans ce format à domicile, 
                    il est possible de personnaliser l'expérience lors de la réservation en ajoutant 
                    différentes options comme des accessoires, des effets sonores ou encore des 
                    costumes pour renforcer l'ambiance. Le concept repose sur la coopération, la 
                    réflexion et l'exploration, avec des scénarios évolutifs selon les choix des 
                    participants. Pensé pour s'adapter à tous les événements, il transforme chaque 
                    session en une aventure unique et mémorable.          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ConceptPage;