import '../assets/css/Header.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      <p>
        <FaEnvelope />
        <span>info@rickinterservicesng.com</span>
      </p>
      <p>
        <FaPhone />
        <span>+234 803 723 6306</span>
      </p>
    </header>
  );
}