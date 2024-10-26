import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';
import ContactBox from '../pages/ContactBox';
import ContactUs  from '../pages/ContactUs';


export default function Contact() {
  useDocumentTitle('Contact - Rick');

  return (
    <>
      <main>
        <Hero text='Contact Us' />
        <ContactBox />
        <ContactUs />
        
      </main>
    </>
  );
}