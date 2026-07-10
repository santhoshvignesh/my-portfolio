import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import graphicIcon from "/public/assets/icons/Graphic-design-icon.webp";
import uxIcon from "/public/assets/icons/ux-design-icon.webp";
import webIcon from "/public/assets/icons/web-development-icon.webp";
function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const servicesData = [
    {
      icon: graphicIcon,
      title: "Graphic Design",
      description:
        "Brand identity, digital illustrations, and designs that speak to your audience",
      aosDelay: 1000,
    },
    {
      icon: uxIcon,
      title: "UI/UX Design",
      description:
        "Intuitive user interfaces and seamless experiences that engage and delight users",
      aosDelay: 2000,
    },
    {
      icon: webIcon,
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
