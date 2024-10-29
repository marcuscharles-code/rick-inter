import '../assets/css/Footer.css';
import Logo2 from '../assets/images/Logo2.png'
import { MdEdit, MdMail, MdLocationOn, MdPhoneEnabled } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-info'>
          <a href='#'>
            <img src={Logo2} alt='logo' width={50} />
            <h4>Rick</h4>
          </a>
          <p>Established in 1989, Welding and Iron Works has become one of the most respected structural, miscellaneous, and ornamental steel fabricators serving Southern California in multi-unit, commercial, and residential projects.</p>
          <div>
            <a href=''><FaFacebookF size={18} /></a>
            <a href=''><FaXTwitter size={18} /></a>
            <a href=''><FaLinkedinIn size={18} /></a>
            <a href=''><FaInstagram size={18} /></a>
            <a href=''><FaYoutube size={18} /></a>
          </div>
        </div>
        <div className='footer-contact'>
          <h4><mark>Contact</mark> Us</h4>
          <p>
            <MdLocationOn />
            <span>
            2231 Johnstown Road Bensenville, IL 60106</span>
          </p>
          <p>
            <MdPhoneEnabled />
            <a href='tel:+2348037236306'>+234 803 723 6306</a>
          </p>
          <p>
            <MdMail />
            <a href='mailto:info@rickinterservicesng.com'>info@rickinterservicesng.com</a>
          </p>
        </div>
        <div className='footer-news'>
          <h4><mark>Subscribe</mark> Us</h4>
          <p>Stay updated with our latest news. We promise not to spam!</p>
          <div>
            <input type='email' placeholder='Your Email' />
            <button><MdEdit /></button>
          </div>
        </div>
      </div>
      <div className='footer-copy'>
        <p>&copy; Copyright Rick Metal Works</p>
      </div>
    </footer>
  );
}
