import '../assets/css/LogoScroll.css';
import nnpc from '../assets/images/nnpc.webp';
import shell from '../assets/images/shell.webp';
import exon from '../assets/images/exon.webp';
import addax from '../assets/images/addax.webp';
import agip from '../assets/images/agip.webp';

function LogoScroll() {
    const brandLogos = [
        { id: 1, name: "Logo1", img: shell },
        { id: 2, name: "Logo2", img: exon },
        { id: 3, name: "Logo3", img: addax },
        { id: 4, name: "Logo4", img: nnpc },
        { id: 4, name: "Logo5", img: agip },
        { id: 4, name: "Logo6", img: agip },
        { id: 4, name: "Logo7", img: agip },
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
