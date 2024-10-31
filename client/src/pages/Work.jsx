import React from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css'; 
import '../assets/css/Work.css';
import workImg from '../assets/images/img1.webp';

export default function Work() {

    const rows = [
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
        { img: workImg, text: 'Sample Text' },
    ];

    // Map through the images to pass to the Lightbox
    const images = rows.map(row => ({
        src: row.img,
        title: row.text,
        description: row.text,
    }));

    return (
        <section className='work'>
            <div className='work-box'>
                <Lightbox images={images} thumbnailWidth="200px" thumbnailHeight="150px" />
            </div>
        </section>
    );
}
