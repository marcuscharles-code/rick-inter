import '../assets/css/Team.css';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import img1 from '../assets/images/Bg1.webp';
import img2 from '../assets/images/Bg2.webp';
import { PiGreaterThanThin } from "react-icons/pi";
import { PiLessThanThin } from "react-icons/pi";

const teamMembers = [
    {
        name: 'John Doe',
        position: 'Lead Engineer',
        phone: '123-456-7890',
        img: img1
    },
    {
        name: 'Jane Smith',
        position: 'Project Manager',
        phone: '987-654-3210',
        img: img2
    },
    // Add more team members as needed
];

function OurTeam() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleSwipeRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    return (
        <div className="team-section">
            <div className="team-header">
                <h1 className="team-title">
                    Our <mark className="highlight">Team</mark>
                </h1>
                <p className="company-name">Rick Metal Inc</p>
                <hr className="team-divider" />
            </div>

            <div className="team-description">
                <p className="team-summary">
                    We are a highly skilled team with years of engineering and design experience. Our goal is to surpass your expectations!
                </p>
                <p className="team-experience">
                    AirForce Trained Veteran / Precision T.I.G. & M.I.G. Welding, 39 Years!
                </p>

                <button className="see-more-btn">See More</button>
            </div>

            <div {...swipeHandlers} className="team-photo-container">
                <PiLessThanThin className="arrow arrow-left" onClick={handleSwipeRight} />

                <div className="team-photo">
                    <img
                        src={teamMembers[currentIndex].img}
                        alt={teamMembers[currentIndex].name}
                        className="team-img"
                    />
                    <span className="team-photo-overlay">
                        <p className="team-member-info">
                            <strong className="team-member-name">{teamMembers[currentIndex].name}</strong>
                            <span className="team-member-position">{teamMembers[currentIndex].position}</span>
                            <span className="team-member-phone">{teamMembers[currentIndex].phone}</span>
                        </p>

                    </span>
                </div>

                <PiGreaterThanThin className="arrow arrow-right" onClick={handleSwipeLeft} />
            </div>
        </div>
    );
}

export default OurTeam;
