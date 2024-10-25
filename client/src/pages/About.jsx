import '../assets/css/About.css';
import bg from '../assets/images/bg.webp';
import ceo from '../assets/images/ceo.webp';
import { FaGreaterThan } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  // Animation variants for more pronounced and artistic effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, type: 'spring', bounce: 0.4 } },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -15, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 1.2, type: 'spring' } },
  };

  const bounceInLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, type: 'spring', bounce: 0.5 } },
  };

  const bounceInRight = {
    hidden: { opacity: 0, x: 60, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1, type: 'spring', bounce: 0.5 } },
  };

  return (
    <section className='about-section'>
      <motion.div
        className='abt-img'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={rotateIn}
      >
        <img className='img-top' src={bg} alt='Background' />
        <motion.img
          className='img-bottom'
          src={ceo}
          alt='CEO'
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        />
      </motion.div>

      <motion.div
        className='abt-content'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div className='founder-name' variants={bounceInLeft}>
          <span>
            Alico <mark>Dangote</mark>
          </span>
          <span>Founder</span>
        </motion.div>

        <motion.div className='about-txt' variants={fadeInUp}>
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
        </motion.div>

        <motion.div className='why-us' variants={bounceInRight}>
          <h1>
            Why <mark>Choose Us</mark>
          </h1>
          <div className='reasons'>
            {[
              'Superior precise quality welds',
              'Welds can be made with little or no filler',
              'Precise control of welding variables'
            ].map((reason, index) => (
              <motion.div
                key={index}
                className='reason'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 60 : -60, scale: 0.8 },
                  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, type: 'spring', delay: index * 0.2 } },
                }}
              >
                <mark><FaGreaterThan /></mark>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
