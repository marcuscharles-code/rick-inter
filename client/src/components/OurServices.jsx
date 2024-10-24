import '../assets/css/Services.css';


function OurServices() {
  const services = [
    { id: 1, title: 'Titanium', subtitle: 'Welding', description: 'There are a few different processes that we use at JA' },
    { id: 2, title: 'Steel', subtitle: 'Cutting', description: 'We offer precise steel cutting services for various needs' },
    { id: 3, title: 'Metal', subtitle: 'Polishing', description: 'Professional metal polishing services for a perfect finish' },
    { id: 4, title: 'Aluminum', subtitle: 'Welding', description: 'Expert welding services for aluminum projects' },
    { id: 5, title: 'Custom', subtitle: 'Fabrication', description: 'Tailored metal fabrication solutions to meet any requirement' },
    { id: 6, title: 'Laser', subtitle: 'Cutting', description: 'Advanced laser cutting services for precise results' }
  ];

  return (
    <div className='services-container'>
      <div className='services'>
        <h1> Our <span>Services</span></h1>
        <p>Rich Metal Fabrication</p>
      </div>

      <div className='services-list-container'>
        {services.map((service) => (
          <div key={service.id} className='services-list'>
            <h1>{`0${service.id}`}</h1>
            <h2> {service.title} <span>{service.subtitle}</span> </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
