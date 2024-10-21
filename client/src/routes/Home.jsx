import Hero from '../pages/Hero';
import About from '../pages/About';
import Gallery from '../pages/Gallery';
import Services from '../pages/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
    </main>
  );
}