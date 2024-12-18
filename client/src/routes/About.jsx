import Hero from '../pages/Hero';
import AboutPage from '../pages/AboutPage';
import useDocumentTitle from '../helpers/useDocumentTitle';
import Service from '../pages/Services';
// import OurTeam from '../pages/OurTeam';
import Counter from '../components/Counter';
import ContactBox from '../pages/ContactBox';
import LogoScroll from '../pages/LogoScroll';

export default function About() {
  useDocumentTitle('About - Rick');


  return (
    <>
      <main>
        <Hero text='About Us' />
          <AboutPage isAboutPage={true}/>
        <Service />
        <Counter />
        {/* <OurTeam /> */}
        <LogoScroll />
        <ContactBox />
      </main>
    </>
  );
}