import '../assets/css/ContactBox.css';
import officeBuilding from '../assets/images/officeBuilding.png'
import customerService from '../assets/images/customerService.png'

const contactData = [
    {
        id: 1,
        image:  officeBuilding,
        title: 'Our Offices',
        description: 'View our locations around the world and find contact details for your nearest office.',
        buttonText: 'Locate the Nearest',
    },
    {
        id: 3,
        image: customerService,
        title: 'Sales Inquiries',
        description: 'Reach out to our sales team for any questions or quotes.',
        buttonText: 'Request a Quote',
    },
];



function ContactBox() {
    return (
        <div className="contact-box-container">
            {contactData.map((contact) => (
                <div className="contact-box" key={contact.id}>
                    <div className='icon-div'>
                        <a href="#">
                            <img src={contact.image} alt={contact.title} className="contact-image-icon" />
                        </a>
                    </div>
                    <a href="#">
                        <h3 className="contact-title">{contact.title}</h3>
                    </a>
                    <p className="contact-description">{contact.description}</p>
                    <button className="contact-button">{contact.buttonText}</button>
                </div>
            ))}
        </div>
    );
}

export default ContactBox;
