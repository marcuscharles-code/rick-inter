import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function About() {
  useDocumentTitle('About - Rick');

  return (
    <>
      <main>
        <Hero text='About Us' />
      </main>
    </>
  );
}