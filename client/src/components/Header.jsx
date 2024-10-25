import '../assets/css/Header.css';
import { MdMail, MdPhoneEnabled } from 'react-icons/md';

export default function Header() {
  return (
    <header>
      <p>
        <MdMail size={16} />
        <a href='mailto:info@rickinterservicesng.com'>info@rickinterservicesng.com</a>
      </p>
      <p>
        <MdPhoneEnabled size={16} />
        <a href='tel:+2348037236306'>+234 803 723 6306</a>
      </p>
    </header>
  );
}