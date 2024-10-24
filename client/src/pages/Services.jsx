import '../assets/css/Services.css';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { id: 1, url: '/', title: 'Titanium', subtitle: 'Welding', description: 'There are a few different processes that we use at JA' },
    { id: 2, url: '/', title: 'Steel', subtitle: 'Cutting', description: 'We offer precise steel cutting services for various needs' },
    { id: 3, url: '/', title: 'Metal', subtitle: 'Polishing', description: 'Professional metal polishing services for a perfect finish' },
    { id: 4, url: '/', title: 'Aluminum', subtitle: 'Welding', description: 'Expert welding services for aluminum projects' },
    { id: 5, url: '/', title: 'Custom', subtitle: 'Fabrication', description: 'Tailored metal fabrication solutions to meet any requirement' },
    { id: 6, url: '/', title: 'Laser', subtitle: 'Cutting', description: 'Advanced laser cutting services for precise results' }
  ];

  return (
    <section className='services'>
      <span></span>
      <div className='services-heading'>
        <h2>Our <mark>Services</mark></h2>
        <p>Rick Metal Fabrication</p>
      </div>
      <div className='services-container'>
        {services.map((service) => (
          <div key={service.id}>
            <h3>0{service.id}</h3>
            <Link to={service.url}><mark>{service.title}</mark> {service.subtitle}</Link>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}