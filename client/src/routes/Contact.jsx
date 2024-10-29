import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';
import ContactBox from '../pages/ContactBox';
import ContactUs  from '../pages/ContactUs';
import MapPage from '../pages/MapPage';

export default function Contact() {
  useDocumentTitle('Contact - Rick');

  return (
    <>
      <main>
        <Hero text='Contact Us' />
        <ContactBox />
        <ContactUs />
        <MapPage />
      </main>
    </>
  );
}