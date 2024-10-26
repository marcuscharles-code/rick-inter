import '../assets/css/Header.css';
import { MdMail, MdSearch, MdPerson2, MdLocationOn, MdPhoneEnabled } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaBagShopping, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      <div>
        <p>
          <MdLocationOn />
          <span>2231 Johnstown Road Bensenville, IL 60106</span>
        </p>
      </div>
      <div>
        <p>
          <MdMail size={16} />
          <a href='mailto:info@rickinterservicesng.com'>info@rickinterservicesng.com</a>
        </p>
        <p>
          <MdPhoneEnabled size={16} />
          <a href='tel:+2348037236306'>+234 803 723 6306</a>
        </p>
      </div>
      <div>
        <span>
          <MdSearch size={16} />
          <FaBagShopping size={16} />
          <MdPerson2 size={16} />
        </span>
        <span>
          <a href=''><FaFacebookF size={16} /></a>
          <a href=''><FaXTwitter size={16} /></a>
          <a href=''><FaLinkedinIn size={16} /></a>
          <a href=''><FaInstagram size={16} /></a>
          <a href=''><FaYoutube size={16} /></a>
        </span>
      </div>
    </header>
  );
}