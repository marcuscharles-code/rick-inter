import Hero from '../pages/Hero';
import AboutPage from '../pages/AboutPage';
import OurTeam from '../pages/OurTeam';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import LearnMore from '../pages/LearnMore';
import ReviewPage from '../pages/ReviewPage';
import useDocumentTitle from '../helpers/useDocumentTitle';
import LogoScroll from '../pages/LogoScroll';

export default function Home() {
  useDocumentTitle('Home - Rick');

  return (
    <main>
      <Hero />
      <AboutPage />
      <Services />
      <ContactUs />
      <ReviewPage />
      <OurTeam />
      <LearnMore />
      <LogoScroll />
    </main>
  );
}