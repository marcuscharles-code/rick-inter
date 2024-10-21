import Hero from '../pages/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
// import OurTeam from '../pages/OurTeam';
// import ReviewPage from '../pages/ReviewPage';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home - Rick');

  return (
    <main>
      <Hero />
      <About />
      <Services />   
      <ContactUs />
      {/* <ReviewPage /> */}
      {/* <OurTeam /> */}
     
    </main>
  );
}