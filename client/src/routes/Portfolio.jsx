import Hero from '../pages/Hero';
// import Work from '../pages/Work';
import Gallery from '../components/Gallery';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Portfolio() {
  useDocumentTitle('Portfolio - Rick');

  return (
    <>
      <main>
        <Hero text='Portfolio' />
        <Gallery />
        {/* <Work /> */}
      </main>
    </>
  );
}