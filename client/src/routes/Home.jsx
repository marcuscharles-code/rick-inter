import Hero from '../pages/Hero';
import About from '../pages/About';
import OurServices from '../components/OurServices';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurServices />
      <Gallery />
     
    </main>
    
  );
}