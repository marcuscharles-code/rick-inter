import '../assets/css/About.css';
import { motion } from 'framer-motion';
import equip2 from '../assets/images/equip2.webp';
import equip1 from '../assets/images/equip1.webp';
import { FaGreaterThan } from 'react-icons/fa';

function AboutPage({ isAboutPage }) {
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
    <section className={`about-section ${isAboutPage ? 'about-section--small' : ''}`} id='about-section'>
      <motion.div
        className='abt-img'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={rotateIn}
      >
        <img className='img-top' src={equip2} alt='Background' />
        <motion.img
          className='img-bottom'
          src={equip1}
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
            WHO WE <mark> ARE</mark>
          </span>
          <span>Founder</span>
        </motion.div>

        <motion.div className='about-txt' variants={fadeInUp}>
          <p>
            Rick International Services Limited is a leading Nigerian indigenous company specializing in the supply, inspection, installation, and maintenance of wellhead equipment, Xmas trees, and tubular goods for the oil and gas industry.
          </p>
          <hr />
          <p>
            🔹Mission: Delivering innovative, sustainable, and efficient oilfield solutions that enhance safety, reliability, and performance in the oil & gas industry.
          </p>
          <p>
            🔹Vision: To be a leading energy solutions provider, driving safer, smarter, and more sustainable oil & gas operations through cutting-edge technology and local expertise.
          </p>
        </motion.div>

        <motion.div className='why-us' variants={bounceInRight}>
          <h1>
            Why <mark>Choose Us</mark>
          </h1>
          <div className='reasons'>
            {[
              'Expertise in Oil & Gas Solutions',
              'Commitment to Safety and Quality',
              'Local Insight with Global Standards',
              'Corporate Social Responsibility'
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

export default AboutPage;
