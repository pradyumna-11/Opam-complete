import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const AccessabilityPolicy = () => (
  <div
    className="accessability-policy-background-main"
    id="sectionAccessabilityPolicy"
  >
    <div className="accessability-policy-container">
      <p className="accessability-policy-item-heading">
        Standards Compliance: <br />
        <p className="accessability-policy-item-description">
          The company complies with WCAG 2.1 standards to ensure web
          accessibility.
        </p>
      </p>

      <p className="accessability-policy-item-heading">
        Data Usage: <br />
        <p className="accessability-policy-item-description">
          Collected data is used to improve service quality, for marketing
          purposes, to personalize user experience, and for analytics.
        </p>
      </p>

      <p className="accessability-policy-item-heading">
        Assistive Technologies: <br />
        <p className="accessability-policy-item-description">
          The website is compatible with screen readers, speech recognition
          software, and other assistive technologies.
        </p>
      </p>

      <p className="accessability-policy-item-heading">
        Feedback Mechanism: <br />
        <p className="accessability-policy-item-description">
          Users can report accessibility issues or request accommodations via a
          dedicated email address or contact form.
        </p>
      </p>

      <a href="/" className="next-link">
        Accessability Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default AccessabilityPolicy;
