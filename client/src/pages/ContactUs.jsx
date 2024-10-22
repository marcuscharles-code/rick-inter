import img2 from '../assets/images/img2.webp';
import '../assets/css/Contact.css'

function ContactUs() {
    return (
        <section className='contact-us-container'>
            <div className='contact-image'>
                <img src={img2} alt='CEO' />
            </div>

            <div className='contact-form-container'>
                <div className='contact-header'>
                    <h1 className='contact-title'>Request a <mark>Quote</mark></h1>
                    <p className='contact-subtitle'>Got a question?</p>
                </div>
                <hr className='contact-divider' />
          
                <form className='contact-form'>
                    <div className='contact-form-fields'>
                        <input
                            className='contact-input'
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                        />
                        <input
                            className='contact-input'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                        />
                        <input
                            className='contact-input'
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            required
                        />
                        <textarea
                            className='contact-textarea'
                            name='message'
                            placeholder='Message'
                            required
                        />
                    </div>
                    <button type='submit' className='contact-submit-button'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
