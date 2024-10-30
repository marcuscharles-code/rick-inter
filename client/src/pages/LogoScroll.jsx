import ceo from '../assets/images/ceo.webp';
import shell from '../assets/images/shell.webp';
import '../assets/css/LogoScroll.css';

function LogoScroll() {
    const brandLogos = [
        { id: 1, name: "Logo1", img: shell },
        { id: 2, name: "Logo2", img: ceo },
        { id: 3, name: "Logo3", img: ceo },
        { id: 4, name: "Logo4", img: ceo },
    ];

    return (
        <div className="scroll-container">
            <div className="brand-div">
                {brandLogos.concat(brandLogos).map((logo) => (
                    <div key={logo.id} className="brand-logo">
                        <img src={logo.img} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;
