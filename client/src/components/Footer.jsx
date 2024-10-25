import '../assets/css/Footer.css';
import logo from '../assets/images/logo.png'
import { FaFacebook, FaYoutube, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { IoMailUnreadSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div >
          <div className="footer-company-info">
            <div className='footer-logo-div'>
              <img src={logo} alt="Company Logo" />
            </div>
            <h2>Rick</h2>
          </div>
          <p className="footer-company-description">
            Established in 1989, Welding and Iron Works has become one of the most respected structural, miscellaneous, and ornamental steel fabricators serving Southern California in multi-unit, commercial, and residential projects.
          </p>
          <div className='footer-social-icons'>
            <FaFacebook  />
            <BsTwitterX  />
            <LuInstagram  />
            <FaYoutube  />
            <FaLinkedin  />
          </div>
        </div>

        <div className="footer-contact-info">
          <h1 className="footer-contact-title">Contact Us</h1>
          <div className="footer-contact-details">
            <p className="contact-detail"><span className="contact-icon"><GrLocation /></span>2231 Johnstown Road, Bensenville, IL 60106</p>
            <p className="contact-detail"><span className="contact-icon"><FaPhoneAlt /></span>+1 234 056 78 90</p>
            <p className="contact-detail"><span className="contact-icon"><IoMailUnreadSharp /></span>weldo@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
