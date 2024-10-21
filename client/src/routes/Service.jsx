import Hero from '../pages/Hero';
import useDocumentTitle from '../helpers/useDocumentTitle';

export default function Service() {
  useDocumentTitle('Services - Rick');

  return (
    <main>
      <Hero />
    </main>
  );
}