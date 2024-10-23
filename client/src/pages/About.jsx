import ceo from '../assets/images/ceo.webp';
import bg from '../assets/images/bg.webp';
import '../assets/css/About.css';

function About() {
  return (
    <section className='about-section'>
      <div className='abt-img'>
        <img className='img-top' src={bg} alt="Background" />
        <img className='img-bottom' src={ceo} alt="CEO" />
      </div>
      <div className='abt-content'>
        <div>
          <h1>Preye Allison </h1>
          <span>Founder</span>
        </div>
        <div>
          <p>Since 1999, Weldo has been servicing all of San Diego. Our mission is to work diligently and efficiently with every client ensuring a smooth and painless process, while we make their vision into reality.</p>
          <p>With our knowledge and experience, it is our goal to attend to our clients needs, going above and beyond their expectations. Longs Welding is your choice for the highest quality and most innovative ideas in iron metal works and ornamentals.</p>
        </div>
        <div>
          <h1>Why Choose Us</h1>
          <div>
            <p><span></span>Superior precise quality welds</p>
            <p><span></span>Welds can be made with little or no filler</p>
            <p><span></span>Precise control of welding variables</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
