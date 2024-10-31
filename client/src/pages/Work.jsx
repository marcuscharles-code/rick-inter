import React, { useState } from 'react';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css'; 
import '../assets/css/Work.css';
import workImg from '../assets/images/img1.webp';

export default function Work() {
    const rows = [
        { img: workImg, text: '1 Text' },
        { img: workImg, text: '2 Text' },
        { img: workImg, text: '3 Text' },
        { img: workImg, text: '4 Text' },
        { img: workImg, text: '5 Text' },
        { img: workImg, text: '6 Text' },
        { img: workImg, text: '7 Text' },
        { img: workImg, text: '8 Text' },
        { img: workImg, text: '9 Text' },
        { img: workImg, text: '10 Text' },
        { img: workImg, text: '11 Text' },
        { img: workImg, text: '12 Text' },
        { img: workImg, text: '13 Text' },
        { img: workImg, text: '14 Text' },
        { img: workImg, text: '15 Text' },
        { img: workImg, text: '16 Text' },
        { img: workImg, text: '17 Text' },
        { img: workImg, text: '18 Text' },
        { img: workImg, text: '19 Text' },
        { img: workImg, text: '20 Text' },
        { img: workImg, text: '21 Text' },
        { img: workImg, text: '22 Text' },
        { img: workImg, text: '23 Text' },
        { img: workImg, text: '24 Text' },
    ];
    
    const images = rows.map(row => ({
        src: row.img,
        title: row.text,
        description: row.text,
    }));

    // State to manage the number of images displayed
    const [visibleImages, setVisibleImages] = useState(4);

    // Function to load more images
    const loadMoreImages = () => {
        setVisibleImages(prevVisible => Math.min(prevVisible + 4, images.length));
    };

    return (
        <section className="work">
            <div className="work-box">
                <Lightbox
                    images={images.slice(0, visibleImages)} // Display only the visible images
                    thumbnailWidth="20rem"
                    thumbnailHeight="20rem"
                    className="work-grid-item"
                />
            </div>
            {visibleImages < images.length && ( // Show "See More" button if there are more images
                <button onClick={loadMoreImages} className="load-more">
                    See More
                </button>
            )}
        </section>
    );
}
