import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import ReviewPage from '../pages/ReviewPage';
import OurTeam from '../pages/OurTeam';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />   
      <ContactUs />
      <ReviewPage />
      <OurTeam />
     
    </main>
  );
}