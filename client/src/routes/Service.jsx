import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';
import ServicePage from '../pages/ServicePage';

export default function Service() {
  useDocumentTitle('Services - Rick');

  return (
    <>
      <main>
        <Hero text='Services' />
        <ServicePage />
      </main>
    </>
  );
}