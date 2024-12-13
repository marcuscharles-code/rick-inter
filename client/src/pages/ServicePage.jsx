import { Link } from "react-router-dom"; 
import "../assets/css/ServicesPage.css";
import weldhead from '../assets/images/weldhead.webp';
import pipe from '../assets/images/pipe.webp';
import equipment from '../assets/images/equipment.webp';
import globalimg from '../assets/images/globalimg.webp';
import technicalSupport from '../assets/images/technicalSupport.webp';
import manpower from '../assets/images/manpower.webp';


function ServicePage() {
    const serviceList = [
        {
            service: "Wellhead Installation",
            img: weldhead,
            path: "/service/services/wellhead-installation",
        },
        {
            service: "Pipe Inspection",
            img: pipe,
            path: "/service/services/pipe-inspection",
        },
        {
            service: "Equipment Maintenance",
            img: equipment,
            path: "/service/services/equipment-maintenance",
        },
        {
            service: "Technical support",
            img: technicalSupport,
            path: "/service/services/technical-support",
        },
        {
            service: "Global Procurement",
            img: globalimg,
            path: "/service/services/global-procurement",
        },
        {
            service: "Manpower Supply",
            img: manpower,
            path: "/service/services/manpower-supply",
        },
    ];

    return (
        <div className="service-page">
            {serviceList.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-image">
                        <Link to={service.path}> {/* Use Link to enable navigation */}
                            <img src={service.img} alt={`${service.service} Thumbnail`} />
                        </Link>
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">{service.service}</h4>
                        <p className="service-link">
                            <Link to={service.path}>Read More</Link> {/* Link for navigation */}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicePage;


// import "../assets/css/ServicesPage.css";
// import ceo from "../assets/images/ceo.webp";

// function ServicePage() {
//     const serviceList = [
//         {
//             service: "Wellhead Installation",
//             img: ceo,
//         },
//         {
//             service: "Pipe Inspection",
//             img: ceo,
//         },
//         {
//             service: "Equipment Maintenance",
//             img: ceo,
//         },
//         {
//             service: "Waste Management",
//             img: ceo,
//         },
//         {
//             service: "Global Procurement",
//             img: ceo,
//         },
//         {
//             service: "Manpower Supply",
//             img: ceo,
//         },
//     ];

//     return (
//         <div className="service-page">
//             {serviceList.map((service, index) => (
//                 <div className="service-card" key={index}>
//                     <div className="service-image">
//                         <img src={service.img} alt={`${service.service} Thumbnail`} />
//                     </div>
//                     <div className="service-content">
//                         <h4 className="service-title">{service.service}</h4>
//                         <p className="service-link">
//                             <a href="#">Read More</a>
//                         </p>
//                     </div>
//                 </div>
//             ))}

//         </div>
//     );
// }

// export default ServicePage;
