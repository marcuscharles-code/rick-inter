import '../assets/css/About.css';
import bg from '../assets/images/bg.webp';
import ceo from '../assets/images/ceo.webp';
import { FaGreaterThan } from 'react-icons/fa';

function About() {
  return (
    <section className='about-section'>
      <div className='abt-img'>
        <img className='img-top' src={bg} alt='Background' />
        <img className='img-bottom' src={ceo} alt='CEO' />
      </div>
      <div className='abt-content'>
        <div className='founder-name'>
          <span>
            {' '}
            Preye <mark>Allison</mark>{' '}
          </span>
          <span>Founder</span>
        </div>
        <div className='about-txt'>
          <p>
            Since 1999, Weldo has been servicing all of San Diego. Our mission
            is to work diligently and efficiently with every client ensuring a
            smooth and painless process, while we make their vision into
            reality.
          </p>

          <hr></hr>

          <p>
            With our knowledge and experience, it is our goal to attend to our
            clients needs, going above and beyond their expectations. Longs
            Welding is your choice for the highest quality and most innovative
            ideas in iron metal works and ornamentals.
          </p>
        </div>
        <div className='why-us'>
          <h1>
            Why <mark>Choose Us</mark>
          </h1>
          <div className='reasons'>
            <div>
              <mark><FaGreaterThan /></mark> 
              <p>Superior precise quality welds</p>
            </div>
            <div>
              <mark><FaGreaterThan /></mark> 
              <p>Welds can be made with little or no filler</p>
            </div>
            <div>
              <mark><FaGreaterThan />
              </mark> <p>Precise control of welding variables</p>
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
