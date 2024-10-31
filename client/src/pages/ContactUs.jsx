import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import aboutImg from '../assets/images/aboutImg.webp';
import '../assets/css/Contact.css';

function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);
    const [loading, setLoading] = useState(false);



    const inputVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
        }),
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (contactRef.current) observer.observe(contactRef.current);
        return () => observer.unobserve(contactRef.current);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'service_juqc316',
            'template_6pzlxdf',
            e.target,
            'GQCNGIzt19RO-YomF'
        )
            .then(
                (result) => {
                    alert('Message Sent! We will get back to you shortly.');
                    e.target.reset(); 
                },
                (error) => {
                    alert('An error occurred. Please try again.');
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section className='contact-us-container' ref={contactRef}>
            <div className='contact-image contactPageImg'>
                <img src={aboutImg} alt='CEO' />
            </div>

            <div className='contact-form-container'>
                <div className='contact-header'>
                    <h1 className='contact-title'>Request a <mark>Quote</mark></h1>
                    <p className='contact-subtitle'>Got a question?</p>
                </div>
                <hr className='contact-divider' />

                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='contact-form-fields'>
                        <motion.input
                            className='contact-input'
                            type='text'
                            name='name'
                            placeholder='Name'
                            required
                            custom="left"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={inputVariants}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        <motion.input
                            className='contact-input'
                            type='email'
                            name='email'
                            placeholder='Email'
                            required
                            custom="right"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={inputVariants}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        <motion.input
                            className='contact-input'
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            required
                            custom="left"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={inputVariants}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                        <motion.textarea
                            className='contact-textarea'
                            name='message'
                            placeholder='Message'
                            required
                            custom="right"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={inputVariants}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        />
                    </div>

                    <motion.button
                        type='submit'
                        className='contact-submit-button'
                        disabled={loading} 
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={buttonVariants}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>

                </form>
            </div>
        </section>
    );
}

export default ContactUs;
























// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import aboutImg from '../assets/images/aboutImg.webp';
// import '../assets/css/Contact.css';

// function ContactUs() {
//     // State to control visibility
//     const [isVisible, setIsVisible] = useState(false);
//     const contactRef = useRef(null);

//     // Animation settings
//     const inputVariants = {
//         hidden: (direction) => ({
//             opacity: 0,
//             x: direction === 'left' ? -100 : 100, // Slide in from left or right
//         }),
//         visible: {
//             opacity: 1,
//             x: 0,
//         },
//     };

//     const buttonVariants = {
//         hidden: {
//             opacity: 0,
//             y: 20, // Start from below
//         },
//         visible: {
//             opacity: 1,
//             y: 0,
//         },
//     };

//     // Intersection Observer setup
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 } else {
//                     setIsVisible(false);
//                 }
//             },
//             { threshold: 0.1 } // Trigger when 10% of the component is visible
//         );

//         if (contactRef.current) {
//             observer.observe(contactRef.current);
//         }

//         // Cleanup observer on component unmount
//         return () => {
//             if (contactRef.current) {
//                 observer.unobserve(contactRef.current);
//             }
//         };
//     }, []);

//     return (
//         <section className='contact-us-container' ref={contactRef}>
//             <div className='contact-image contactPageImg'>
//                 <img src={aboutImg} alt='CEO' />
//             </div>

//             <div className='contact-form-container'>
//                 <div className='contact-header'>
//                     <h1 className='contact-title'>Request a <mark>Quote</mark></h1>
//                     <p className='contact-subtitle'>Got a question?</p>
//                 </div>
//                 <hr className='contact-divider' />

//                 <form className='contact-form'>
//                     <div className='contact-form-fields'>
//                         <motion.input
//                             className='contact-input'
//                             type='text'
//                             name='name'
//                             placeholder='Name'
//                             required
//                             custom="left" // Pass direction for animation
//                             initial="hidden"
//                             animate={isVisible ? "visible" : "hidden"}
//                             variants={inputVariants}
//                             transition={{ duration: 1, ease: "easeInOut" }}
//                         />
//                         <motion.input
//                             className='contact-input'
//                             type='email'
//                             name='email'
//                             placeholder='Email'
//                             required
//                             custom="right" // Pass direction for animation
//                             initial="hidden"
//                             animate={isVisible ? "visible" : "hidden"}
//                             variants={inputVariants}
//                             transition={{ duration: 1, ease: "easeInOut" }}
//                         />
//                         <motion.input
//                             className='contact-input'
//                             type='text'
//                             name='subject'
//                             placeholder='Subject'
//                             required
//                             custom="left" // Pass direction for animation
//                             initial="hidden"
//                             animate={isVisible ? "visible" : "hidden"}
//                             variants={inputVariants}
//                             transition={{ duration: 1, ease: "easeInOut" }}
//                         />
//                         <motion.textarea
//                             className='contact-textarea'
//                             name='message'
//                             placeholder='Message'
//                             required
//                             custom="right"
//                             initial="hidden"
//                             animate={isVisible ? "visible" : "hidden"}
//                             variants={inputVariants}
//                             transition={{ duration: 1, ease: "easeInOut" }}
//                         />
//                     </div>

//                     <motion.button
//                         type='submit'
//                         className='contact-submit-button'
//                         initial="hidden"
//                         animate={isVisible ? "visible" : "hidden"}
//                         variants={buttonVariants}
//                         transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }} // Delay for button
//                     >
//                         Send Message
//                     </motion.button>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default ContactUs;