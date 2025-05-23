import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const servicesData = [
    {
      icon: "../../assets/icons/Graphic-design-icon.png",
      title: "Graphic Design",
      description:
        "Brand identity, digital illustrations, and designs that speak to your audience",
      aosDelay: 1000,
    },
    {
      icon: "../../assets/icons/ux-design-icon.png",
      title: "UI/UX Design",
      description:
        "Intuitive user interfaces and seamless experiences that engage and delight users",
      aosDelay: 2000,
    },
    {
      icon: "../../assets/icons/web-development-icon.png",
      title: "Web Development",
      description:
        "Responsive websites built with HTML, CSS, JavaScript, and React for a flawless experience across all devices",
      aosDelay: 3000,
    },
  ];

  return (
    <div className="Cards">
      <div className="title">What I Do (Key Skills & Services)</div>
      <div className="ServiceCards">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="ServiceCard"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={service.aosDelay}
          >
            <div className="icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="serviceTitle">{service.title}</div>
            <div className="serviceDescription">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
