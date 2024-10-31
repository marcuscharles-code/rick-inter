import '../assets/css/LogoScroll.css';
import nnpc from '../assets/images/nnpc.webp';
import shell from '../assets/images/shell.webp';
import exon from '../assets/images/exon.webp';
import addax from '../assets/images/addax.webp';
import agip from '../assets/images/agip.webp';

function LogoScroll() {
    const brandLogos = [
        { id: 1, name: "Shell", img: shell },
        { id: 2, name: "Exxon", img: exon },
        { id: 3, name: "Addax", img: addax },
        { id: 4, name: "NNPC", img: nnpc },
        { id: 5, name: "Agip", img: agip },
    ];

    return (
        <div className="scroll-container">
            <div className="brand-div">
                {brandLogos.concat(brandLogos).map((logo, index) => (
                    <div key={index} className="brand-logo">
                        <img src={logo.img} alt={logo.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;
