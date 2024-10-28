import { useParams } from "react-router-dom";
import '../assets/css/ServicesPage.css'
import ceo from "../assets/images/ceo.webp";

const serviceDetails = {
  "wellhead-installation": {
    title: "Wellhead Installation",
    description: "Rick International specializes in the complete installation of wellhead systems, supporting projects from start to finish. Our team is equipped with the latest tools and technical expertise to install various types of wellheads, ensuring high performance and safety standards. Having successfully executed numerous wellhead installations for leading oil companies, Rick International has proven its ability to handle the complexities of the job, from initial setup to final testing. Our commitment to quality and precision has made us a trusted partner in wellhead services across Nigeria's oil and gas sector.",
    img: ceo,
  },
  "pipe-inspection": {
    title: "Pipe Inspection",
    description: "Our pipe inspection service is designed to enhance the safety and integrity of oilfield operations. Rick International employs advanced inspection technologies and experienced engineers to conduct comprehensive inspections, identifying issues before they escalate. Our approach to inspection includes non-destructive testing and state-of-the-art evaluation techniques that meet stringent industry standards. This proactive approach has established Rick International as a leader in pipe inspection, helping clients reduce risks and maintain operational efficiency.",
    img: ceo,
  },
  "equipment-maintenance": {
    title: "Equipment Maintenance",
    description: "Rick International provides reliable maintenance services for essential oilfield equipment, including wellheads and Xmas trees. We emphasize preventative maintenance and repairs, ensuring equipment longevity and operational uptime. With seasoned maintenance professionals on our team, we have developed efficient maintenance programs tailored to each client’s needs. Our rigorous standards and effective solutions have made us the preferred choice for companies looking to minimize downtime and enhance equipment performance.",
    img: ceo,
  },
  "waste-management": {
    title: "Waste Management",
    description: "Our waste management solutions offer sustainable and compliant options for handling oilfield waste, ensuring a safe and environmentally conscious approach. Rick International’s expertise covers both hazardous and non-hazardous waste, using best practices to reduce environmental impact while adhering to local and international regulations. By integrating safety and eco-efficiency into each project, we help clients maintain regulatory compliance and corporate responsibility in waste management.",
    img: ceo,
  },
  "global-procurement": {
    title: "Global Procurement",
    description: "Rick International’s procurement services are tailored to streamline the sourcing and supply of materials for oil and gas projects. Our global procurement network allows us to source quality materials at competitive prices, ensuring timely delivery and cost-effectiveness. We manage the entire procurement cycle, from supplier selection to quality assurance, so our clients can focus on core operations. Through our proven procurement practices, Rick International has become a valued partner for clients seeking reliable and efficient sourcing solutions.",
    img: ceo,
  },
  "manpower-supply": {
    title: "Manpower Supply",
    description: "To support complex projects in the oil and gas industry, Rick International offers skilled manpower supply services, including engineers, technicians, and project managers. We carefully select and train personnel to meet project demands, ensuring they are knowledgeable, certified, and committed to safety. Our focus on workforce excellence and local expertise has allowed us to build a highly respected reputation for delivering exceptional manpower services, making Rick International a trusted choice for top-quality, dedicated personnel in Nigeria’s oil and gas sector.",
    img: ceo,
  },
};

function ServicesDetails
  () {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (

    <div className="service-detail">
      <h1>{service.title}</h1>
      <div  className="sub-service-image">
        <img src={service.img} alt={service.title} />
      </div>
      <p>{service.description}</p>
    </div>

  );
}

export default ServicesDetails
  ;
