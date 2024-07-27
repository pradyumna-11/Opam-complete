import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const DataSecurityPolicy = () => (
  <div
    className="datasecurity-policy-background-main"
    id="sectionDataSecurityPolicy"
  >
    <div className="datasecurity-policy-container">
      <p className="datasecurity-policy-item-heading">
        Security Measures: <br />
        <p className="datasecurity-policy-item-description">
          Technical measures include firewalls, encryption, and secure coding
          practices. Organizational measures include regular training and access
          controls.
        </p>
      </p>

      <p className="datasecurity-policy-item-heading">
        Data Usage: <br />
        <p className="datasecurity-policy-item-description">
          Collected data is used to improve service quality, for marketing
          purposes, to personalize user experience, and for analytics.
        </p>
      </p>

      <p className="datasecurity-policy-item-heading">
        Incident Response:
        <br />
        <p className="datasecurity-policy-item-description">
          A defined procedure for responding to data breaches includes immediate
          containment, investigation, and notification of affected users.
        </p>
      </p>

      <p className="datasecurity-policy-item-heading">
        User Responsibilities: <br />
        <p className="datasecurity-policy-item-description">
          Users are advised to use strong passwords, enable two-factor
          authentication, and regularly update their software.
        </p>
      </p>

      <a href="/" className="next-link">
        Data Security Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default DataSecurityPolicy;
