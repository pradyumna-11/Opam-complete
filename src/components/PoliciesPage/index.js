import AcceptableUsePolicy from "../Policies/AcceptableUsePolicy";
import AccessabilityPolicy from "../Policies/AccessabilityPolicy";
import CookiePolicy from "../Policies/CookiePolicy";
import DataSecurityPolicy from "../Policies/DataSecurityPolicy";
import GDPRCompilance from "../Policies/GDPRCompilance";
import PrivacyPolicy from "../Policies/PrivacyPolicy";
import RefundPolicy from "../Policies/RefundPolicy";
import TermsOfService from "../Policies/TermsOfService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./index.css";
import ClientPrivacyPolicy from "../Policies/ClientPrivacyPolicy";

const logos = [
  {
    src: "https://res.cloudinary.com/daxizvsge/image/upload/v1719388802/java-logo-vector_fknxbu.png",
    alt: "Java Logo",
  },
  {
    src: "https://res.cloudinary.com/daxizvsge/image/upload/v1719388801/python_o1okfo.jpg",
    alt: "Python Logo",
  },
  {
    src: "https://res.cloudinary.com/daxizvsge/image/upload/v1719388801/css_phdyse.jpg",
    alt: "CSS Logo",
  },
  {
    src: "https://res.cloudinary.com/daxizvsge/image/upload/v1719388802/react_zsn5sa.jpg",
    alt: "React Logo",
  },
  {
    src: "https://res.cloudinary.com/daxizvsge/image/upload/v1719388802/nextjs_zuajaz.jpg",
    alt: "Next.js Logo",
  },
];

const PolicyPage = () => {
  const location = useLocation();
  const [displayPolicies, changeDisplayPolicies] = useState(false);

  useEffect(() => {
    const animationFunction = () => {
      let currentIndex = 0;
      const totalDuration = 500; // Set to 5 seconds
      const intervalDuration = totalDuration / logos.length;

      const changeLogoAndFact = () => {
        const logoElement = document.getElementById("logo");
        const { src, alt } = logos[currentIndex];

        logoElement.src = src;
        logoElement.alt = alt;

        currentIndex = (currentIndex + 1) % logos.length;
      };

      const intervalId = setInterval(changeLogoAndFact, intervalDuration);

      setTimeout(() => {
        clearInterval(intervalId);
        changeDisplayPolicies(true);
      }, totalDuration);
    };

    animationFunction();

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="policy-page">
      {displayPolicies === false ? (
        <div className="policy-animation-container">
          <div className="logo-container">
            <img
              id="logo"
              src="https://res.cloudinary.com/daxizvsge/image/upload/v1719388802/java-logo-vector_fknxbu.png"
              alt="Java Logo"
            />
          </div>
        </div>
      ) : (
        <>
          <PrivacyPolicy />
          <TermsOfService />
          <AcceptableUsePolicy />
          <AccessabilityPolicy />
          <CookiePolicy />
          <DataSecurityPolicy />
          <GDPRCompilance />
          <RefundPolicy />
          <ClientPrivacyPolicy />
        </>
      )}
    </div>
  );
};

export default PolicyPage;
