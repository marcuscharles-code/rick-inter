import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact - Rick');

  return (
    <>
      <main>
        <Hero text='Contact Us' />
      </main>
    </>
  );
}