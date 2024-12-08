import { Link } from "react-router-dom"; 
import "../assets/css/ServicesPage.css";
import weldhead from '../assets/images/weldhead.webp';
import pipe from '../assets/images/pipe.webp';
import maintenance from '../assets/images/maintenance.webp';
import waste from '../assets/images/waste.webp';
import Global from '../assets/images/Global.webp';
import man from '../assets/images/man.webp';


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
            img: maintenance,
            path: "/service/services/equipment-maintenance",
        },
        {
            service: "Waste Management",
            img: waste,
            path: "/service/services/waste-management",
        },
        {
            service: "Global Procurement",
            img: Global,
            path: "/service/services/global-procurement",
        },
        {
            service: "Manpower Supply",
            img: man,
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
