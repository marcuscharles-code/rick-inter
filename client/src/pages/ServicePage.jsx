import "../assets/css/ServicesPage.css";
import ceo from "../assets/images/ceo.webp";

function ServicePage() {
    const serviceList = [
        {
            service: "Wellhead Installation",
            img: ceo,
        },
        {
            service: "Pipe Inspection",
            img: ceo,
        },
        {
            service: "Equipment Maintenance",
            img: ceo,
        },
        {
            service: "Waste Management",
            img: ceo,
        },
        {
            service: "Global Procurement",
            img: ceo,
        },
        {
            service: "Manpower Supply",
            img: ceo,
        },
    ];

    return (
        <div className="service-page">
            {serviceList.map((service, index) => (
                <div className="service-card" key={index}>
                    <div className="service-image">
                        <img src={service.img} alt={`${service.service} Thumbnail`} />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">{service.service}</h4>
                        <p className="service-link">
                            <a href="#">Read More</a>
                        </p>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default ServicePage;
