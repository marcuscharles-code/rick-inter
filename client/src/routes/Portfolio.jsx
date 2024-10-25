import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Portfolio() {
  useDocumentTitle('Portfolio - Rick');

  return (
    <>
      <main>
        <Hero text='Portfolio' />
      </main>
    </>
  );
}