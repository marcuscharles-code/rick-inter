import Hero from '../pages/Hero';
import Work from '../pages/Work';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Portfolio() {
  useDocumentTitle('Portfolio - Rick');

  return (
    <>
      <main>
        <Hero text='Portfolio' />
        <Work />
      </main>
    </>
  );
}