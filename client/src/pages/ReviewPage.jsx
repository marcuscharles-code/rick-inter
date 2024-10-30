import '../assets/css/Review.css';
import { FaArrowRight, FaArrowLeft  } from "react-icons/fa";
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ceo from '../assets/images/ceo.webp';
import Bg1 from '../assets/images/Bg1.webp';
import Bg2 from '../assets/images/Bg2.webp';

function ReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      image: ceo,
      text: "Turpis ligula, ornare molestie maximus eu, vestibulum id massa. Nam bibendum lorem quis ultrices maximus.",
    },
    {
      image: Bg1,
      text: "Integer interdum consectetur euismod. Phasellus pharetra est in lorem varius, ut malesuada leo tempor.",
    },
    {
      image: Bg2,
      text: "Vivamus commodo, lectus at aliquam consectetur, justo libero facilisis est, at dictum metus.",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextReview(),
    onSwipedRight: () => prevReview(),
    trackMouse: true, 
  });

  return (
    <section className='review-section'>
      <div className='review-header'>
        <p className='review-title'>
          What <span>People Say</span>
        </p>
        <h4 className='company-name'>Rick International Services</h4>
        <hr className='review-divider' />
      </div>

      <div className='review-content' {...handlers}>
        <div className='review-image'>
          <img src={reviews[currentIndex].image} alt='Review' />
        </div>
        <div className='review-text'>
          <p>{reviews[currentIndex].text}</p>
        </div>

        <div className='review-navigation'>
          <span className='nav-arrow back-arrow' onClick={prevReview}>
            <FaArrowLeft />
          </span>
          <span className='nav-arrow next-arrow' onClick={nextReview}>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ReviewPage;


