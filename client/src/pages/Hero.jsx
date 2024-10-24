import '../assets/css/Hero.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import hero from '../assets/images/hero.webp';

export default function Hero() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const overlayRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
  };

  const handleOverlayToggle = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

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
    { title: 'Services', url: '/services' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <section className='hero'>
      <img src={hero} alt='bg' />
      <span></span>
      <div className={`hero-nav ${isSticky ? 'sticky' : ''}`}>
        <div className='hero-logo'>
          <img src={logo} alt='logo' width={50} />
          <h4>Rick</h4>
        </div>
        {isOverlayVisible && (
          <div className='hero-overlay' ref={overlayRef}>
            <div></div>
            <div></div>
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
      <div className='hero-text'>
        <h2>Welding</h2>
        <h3>Welding <mark>&amp;</mark> Iron Works</h3>
        <p>We Build <mark>The Best.</mark></p>
      </div>
      <div className='hero-modal'>
        {items.map((item) => (
          <div key={item.num}>
            <h3>0{item.num}</h3>
            <p>{item.title}</p>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}