import '../assets/css/Header.css';
import { MdMail, /*MdLocationOn,*/ MdOutlineCall  } from 'react-icons/md';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      {/* <div>
        <p>
          <MdLocationOn />
          <span>No. 3, Off Boskel Road, Km16, Ph-Aba Expressway, Port Harcourt</span>
        </p>
      </div> */}
      <div>
        <p>
          <MdMail size={16} />
          <a href='mailto:info@rislng.com'>info@rislng.com</a>
        </p>
        <p>
          <MdOutlineCall  size={16} />
          <a href='tel:+2348037236306'>+234-803-723-6306</a>
        </p>
      </div>
      <div>
       
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