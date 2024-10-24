import ModalImage from 'react-modal-image';
import '../assets/css/Gallery.css';
import ceo from '../assets/images/ceo.webp'
const Gallery = () => {
  const images = [
    {
      original: 'https://example.com/photo1.jpg',
      thumbnail: 'https://example.com/photo1_thumb.jpg',
      alt: 'Description of Photo 1',
    },
    {
      original: 'https://example.com/photo2.jpg',
      thumbnail: 'https://example.com/photo2_thumb.jpg',
      alt: 'Description of Photo 2',
    },
    {
      original: 'https://example.com/photo3.jpg',
      thumbnail: 'https://example.com/photo3_thumb.jpg',
      alt: 'Description of Photo 3',
    },
    {
      original: 'https://example.com/photo4.jpg',
      thumbnail: 'https://example.com/photo4_thumb.jpg',
      alt: 'Description of Photo 4',
    },
  ];

  return (
    <section className='gallery'>
      <img src={ceo} />
      {images.map((image, index) => (
        <ModalImage
          key={index}
          small={image.thumbnail}
          large={image.original}
          alt={image.alt}
          className='gallery-image'
        />
      ))}
    </section>
  );
};

export default Gallery;
