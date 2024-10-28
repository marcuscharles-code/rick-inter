import '../assets/css/Hero.css';
import PropTypes from 'prop-types';
import Logo2 from '../assets/images/Logo2.png';
import hero from '../assets/images/hero.webp';
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Hero({ text }) {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const overlayRef = useRef(null);

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
    { num: 1, title: 'give us a call', text: 'Your official source for 24/7 Rick support' },
    { num: 2, title: 'evaluate the cost', text: 'Cost analysis helps evaluate contract profitability' },
    { num: 3, title: 'get the job done', text: 'Fulfil one\'s task, to do what is required to do' },
  ];

  const lists = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/service' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/contact' },
  ];

  const isHomeRoute = location.pathname === '/';

  return (
    <section className={`hero ${isHomeRoute ? 'home' : ''}`}>
      <img src={hero} alt='bg' />
      <span></span>
      <div className={`hero-nav ${isSticky ? 'sticky' : ''}`}>
        <Link className='hero-logo'>
          <img src={Logo2} alt='logo' width={50} />
          <h4>Rick</h4>
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
          <h2>Rick</h2>
          <h3><mark>Rick</mark>  International <br/> Services <mark>Limited</mark></h3>
          {/* <p>We Build <mark>The Best.</mark></p> */}
        </div>
      ) : (
        <div className='hero-text'>
          <h3>{text}</h3>
          <p><Link to="/">Home</Link> /<span>{text}</span></p>
        </div>
      )}
      {isHomeRoute && (
        <div className='hero-modal'>
          {items.map((item) => (
            <div key={item.num}>
              <h3>0{item.num}</h3>
              <p>{item.title}</p>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

Hero.propTypes = {
  text: PropTypes.string,
};