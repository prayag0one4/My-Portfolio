
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
