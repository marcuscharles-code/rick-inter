import { useParams, useNavigate } from "react-router-dom";
import '../assets/css/ServicesPage.css'
import weldhead from '../assets/images/weldhead.webp';
import pipe from '../assets/images/pipe.webp';
import maintenance from '../assets/images/maintenance.webp'
import waste from '../assets/images/waste.webp'
import Global from '../assets/images/Global.webp'
import man from '../assets/images/man.webp'


const serviceDetails = {
  "wellhead-installation": {
    title: "Wellhead Installation",
    description: "We deliver precise wellhead installation services, ensuring accurate alignment and functionality to facilitate efficient and secure extraction while maintaining well control. Our skilled team strictly follows industry standards and best practices to uphold safety and reliability.",
    img: weldhead,
  },
  "pipe-inspection": {
    title: "Pipe Inspection",
    description: "Our inspection services utilize advanced non-destructive testing (NDT) methods to identify defects, corrosion, and irregularities in pipelines. We emphasize safety, operational efficiency, and adherence to regulatory requirements, reducing downtime and mitigating risks.",
    img: pipe,
  },
  "equipment-maintenance": {
    title: "Equipment Maintenance",
    description: "We provide tailored maintenance solutions to enhance the durability and efficiency of critical wellhead systems. Our preventive approach reduces the likelihood of failures and optimizes operational performance through regular assessments and timely repairs.",
    img: maintenance,
  },
  "waste-management": {
    title: "Technical Support",
    description: "We offer specialized technical assistance for wellhead systems, addressing installation, troubleshooting, and operational challenges.",
    img: waste,
  },
  "global-procurement": {
    title: "Global Procurement",
    description: "Through strategic partnerships with OEMs, we procure and supply premium wellhead components, xmas trees, and other vital oil and gas equipment. Our streamlined processes ensure cost-effective solutions and prompt delivery to meet specific project demands.",
    img: Global,
  },
  "manpower-supply": {
    title: "Manpower Supply",
    description: "We offer qualified personnel, including engineers, technicians, and field specialists, to support various stages of oil and gas operations. Our manpower solutions ensure access to experienced professionals for seamless project execution.",
    img: man,
  },
};

function ServicesDetails
  () {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const handleBack = () => {
    navigate(-1);
  };


  return (

    <div className="service-detail">
      <h1>{service.title}</h1>
      <div className="con-div">
        <div className="sub-service-image">
          <img src={service.img} alt={service.title} />
        </div>
        <p>{service.description}</p>
      </div>

    </div>

  );
}

export default ServicesDetails
  ;
