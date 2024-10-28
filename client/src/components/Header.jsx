import '../assets/css/Header.css';
import { MdMail, MdSearch, MdPerson2, MdLocationOn, MdPhoneEnabled } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaBagShopping, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      <div>
        <p>
          <MdLocationOn />
          <span>No. 3, Shell Location Road, Off Boskel Road, Km16, Ph-Aba Expressway, Port Harcourt</span>
        </p>
      </div>
      <div>
        <p>
          <MdMail size={16} />
          <a href='mailto:info@rislng.com'>info@rislng.com</a>
        </p>
        <p>
          <MdPhoneEnabled size={16} />
          <a href='tel:+2348037236306'>+2348037236306</a>
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