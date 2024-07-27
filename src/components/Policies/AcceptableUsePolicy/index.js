import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const AcceptableUsePolicy = () => (
  <div
    className="acceptable-policy-background-main"
    id="sectionAcceptablePolicy"
  >
    <div className="acceptable-policy-container">
      <p className="acceptable-policy-item-heading">
        Prohibited Activities: <br />
        <p className="acceptable-policy-item-description">
          Users are prohibited from engaging in illegal activities, spamming,
          distributing malware, or harassment.
        </p>
      </p>

      <p className="acceptable-policy-item-heading">
        Data Usage: <br />
        <p className="acceptable-policy-item-description">
          Collected data is used to improve service quality, for marketing
          purposes, to personalize user experience, and for analytics.
        </p>
      </p>

      <p className="acceptable-policy-item-heading">
        User Conduct: <br />
        <p className="acceptable-policy-item-description">
          Users must respect others, not interfere with the service, and adhere
          to community guidelines.
        </p>
      </p>

      <p className="acceptable-policy-item-heading">
        Consequences : <br />
        <p className="acceptable-policy-item-description">
          Violations may result in account suspension, termination, or legal
          action.
        </p>
      </p>

      <a href="/" className="next-link">
        Acceptable Use Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default AcceptableUsePolicy;
