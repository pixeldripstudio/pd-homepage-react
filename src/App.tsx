import Header from './components/Header';
import Hero from './components/sections/Hero';
import Agitation from './components/sections/Agitation';
import Services from './components/sections/Services';
import DigitalLane from './components/sections/DigitalLane';
import Process from './components/sections/Process';
import ScatteredMarketing from './components/sections/ScatteredMarketing';
import PainPoints from './components/sections/PainPoints';
import Positioning from './components/sections/Positioning';
import Proof from './components/sections/Proof';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Agitation />
        <Services />
        <DigitalLane />
        <Process />
        <ScatteredMarketing />
        <PainPoints />
        <Positioning />
        <Proof />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
