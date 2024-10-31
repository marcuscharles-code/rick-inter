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
    { id: 1, icon: wellheadIcon, url: '/', title: 'Wellhead', subtitle: 'Installation', description: 'There are a few different processes that we use at JA' },
    { id: 2, icon: PipeInspection, url: '/', title: 'Pipe', subtitle: 'Inspection', description: 'We offer precise steel cutting services for various needs' },
    { id: 3, icon: maintainanceIcon, url: '/', title: 'Equipment', subtitle: 'Maintenance', description: 'Professional metal polishing services for a perfect finish' },
    { id: 4, icon: waste, url: '/', title: 'Waste', subtitle: 'Management', description: 'Expert welding services for aluminum projects' },
    { id: 5, icon: globalP, url: '/', title: 'Global', subtitle: 'Procurement', description: 'Tailored metal fabrication solutions to meet any requirement' },
    { id: 6, icon: manPower, url: '/', title: 'Manpower', subtitle: 'Supply', description: 'Advanced laser cutting services for precise results' }
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
