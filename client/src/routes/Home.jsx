import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
// import OurTeam from '../pages/OurTeam';
// import ReviewPage from '../pages/ReviewPage';
import useDocumentTitle from '../helpers/useDocumentTitle';
import LearnMore from '../pages/LearnMore';
import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

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
    {/* <Navbar /> */}
      <LearnMore />
     <Footer />
    </main>
   
  );
}