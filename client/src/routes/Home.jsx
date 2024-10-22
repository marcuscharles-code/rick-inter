import Hero from '../pages/Hero';
import About from '../pages/About';
import OurTeam from '../pages/OurTeam';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import LearnMore from '../pages/LearnMore';
import ReviewPage from '../pages/ReviewPage';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home - Rick');

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ContactUs />
      <ReviewPage />
      <OurTeam />
      <LearnMore />
    </main>
  );
}