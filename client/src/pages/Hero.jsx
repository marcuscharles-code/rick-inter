import '../assets/css/Hero.css';
import PropTypes from 'prop-types';
import Logo2 from '../assets/images/Logo2.png';
import equip2 from '../assets/images/equip2.webp';
import tools9 from '../assets/images/tools9.webp';
import ourservicebg from '../assets/images/ourservicebg.webp';
import equip1 from '../assets/images/equip1.webp';
import counterimg from '../assets/images/counterimg.webp';
import eyescan from '../assets/images/eyescan.mp4';
import value from '../assets/images/value.mp4';
import mission from '../assets/images/mission.mp4';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


export default function Hero({ text }) {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayRef = useRef(null);

  // Function to set the background image based on the current route
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return tools9;
      case '/service':
        return ourservicebg;
      case '/portfolio':
        return equip1;
      case '/contact':
        return counterimg;
      default:
        return equip2; // Default image for the Home page
    }
  };

  const handleScroll = () => setIsSticky(window.scrollY > 0);
  const handleOverlayToggle = () => setIsOverlayVisible(!isOverlayVisible);

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setIsOverlayVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (isOverlayVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOverlayVisible]);

  const items = [
    { icon: <video src={eyescan} autoPlay loop muted />, title: 'OUR VISION', text: 'To be a leading energy solutions provider, driving safer, smarter, and more sustainable oil & gas operations through cutting-edge technology and local expertise.' },
    { icon: <video src={mission} autoPlay loop muted />, title: 'OUR MISSION', text: 'Delivering innovative, sustainable, and efficient oilfield solutions that enhance safety, reliability, and performance in the oil & gas industry.' },
    { icon: <video src={value} autoPlay loop muted />, title: 'CORE VALUES', text: 'Innovation & Agility, Operational Excellence, Safety & Integrity, Sustainability, Collaboration' },
  ];

  const lists = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/service' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/contact' },
  ];


  // useEffect(() => {
  //   const options = {
  //     strings: [
  //       'Excellence in Wellhead & Oilfield Services',
  //     ],
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     loop: true,
  //   };

  //   const typed = new Typed(mottoRef.current, options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);


  const isHomeRoute = location.pathname === '/';

  return (
    <>
      <section className={`hero ${isHomeRoute ? 'home' : ''}`}>
        <img src={getBackgroundImage()} alt='bg' />
        <span></span>
        <div className={`hero-nav ${isSticky ? 'sticky' : ''}`}>
          <Link className='hero-logo'>
            <img src={Logo2} alt='logo' width={50} />
            <h4>RICK</h4>
          </Link>
          {isOverlayVisible && (
            <div className='hero-overlay' ref={overlayRef}>
              <div></div>
              <ul>
                {lists.map((list, index) => (
                  <li key={index}>
                    <NavLink to={list.url}>{list.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className='hero-list'>
            <ul>
              {lists.map((list, index) => (
                <li key={index}>
                  <NavLink to={list.url}>{list.title}</NavLink>
                </li>
              ))}
            </ul>
            <label>
              <input type='checkbox' checked={isOverlayVisible} onChange={handleOverlayToggle} />
              <svg viewBox='0 0 32 32'>
                <path d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'></path>
                <path d='M7 16 27 16'></path>
              </svg>
            </label>
          </div>
        </div>
        {isHomeRoute ? (
          <div className='hero-text'>
            {/* <div className='heroPage-logo'>
            <img src={Logo2} />
          </div> */}
            <h2>Rick INTERNATIONAL</h2>
            <h3 className='welcome-to'>WELCOME TO</h3>
            <h3>RICK INTERNATIONAL SERVICES LIMITED </h3>

            <div></div>

            <p >Welcome to Rick International Services Limited</p>
            {/* <p className='motto' ref={mottoRef}></p> */}
          </div>

        ) : (
          <div className='hero-text'>
            <h3>{text}</h3>
            <p><Link to="/">Home</Link> /<span>{text}</span></p>
          </div>
        )}
        {isHomeRoute && (
          <div className='hero-modal'>
            {items.map((item, index) => (
              <div key={index}>
                <div className='animated-icon'>
                  {item.icon}
                </div>
                <p>{item.title}</p>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

Hero.propTypes = {
  text: PropTypes.string,
};