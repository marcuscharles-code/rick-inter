import '../assets/css/Services.css';
import { Link } from 'react-router-dom';
import wellheadIcon from '../assets/images/wellheadIcon.png';
import PipeInspection from '../assets/images/PipeInspection.png';
import maintainanceIcon from '../assets/images/maintainanceIcon.png';
import waste from '../assets/images/waste.png';
import globalP from '../assets/images/globalP.png';
import manPower from '../assets/images/manPower.png';

export default function Services() {
  const services = [
    { id: 1, icon: wellheadIcon, url: '/', title: 'Wellhead', subtitle: 'Installation', description: 'Precision-engineered wellhead installation for seamless operations and long-term reliability.' },
    { id: 2, icon: PipeInspection, url: '/', title: 'Pipe', subtitle: 'Inspection', description: 'Advanced inspection solutions to ensure pipeline integrity, safety, and compliance.' },
    { id: 3, icon: maintainanceIcon, url: '/', title: 'Equipment', subtitle: 'Maintenance', description: 'Preventive and corrective maintenance to maximize equipment lifespan and performance.' },
    { id: 4, icon: waste, url: '/', title: 'Technical', subtitle: 'Support', description: 'Expert guidance and troubleshooting to keep your operations running efficiently.' },
    { id: 5, icon: globalP, url: '/', title: 'Global', subtitle: 'Procurement', description: 'Reliable sourcing and supply of high-quality oilfield equipment and materials worldwide.' },
    { id: 6, icon: manPower, url: '/', title: 'Man power', subtitle: 'Supply', description: 'Providing skilled, safety-certified professionals to meet your project needs.' }
  ];

  return (
    <section className='services'>
      <span></span>
      <div className='services-heading'>
        <h2>Our <mark>Services</mark></h2>
        <p>Rick International Services Limited</p>
      </div>
      <div className='services-container'>
        {services.map((service) => (
          <div key={service.id} className='service-item'>
            <div className='servicesIcon'>
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <Link to={service.url}>
              <mark>{service.title}</mark> {service.subtitle}
            </Link>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
