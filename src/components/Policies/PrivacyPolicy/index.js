import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const PrivacyPolicy = () => (
  <div className="policy-background-main" id="sectionPrivacyPolicy">
    <div className="privacy-policy-container">
      <p className="policy-item-heading">
        Data Collection: <br />
        <p className="policy-item-description">
          Types of data collected include personal information (such as name,
          email address, phone number) and usage data (such as browsing history,
          IP address).
        </p>
      </p>

      <p className="policy-item-heading">
        Data Usage: <br />
        <p className="policy-item-description">
          Collected data is used to improve service quality, for marketing
          purposes, to personalize user experience, and for analytics.
        </p>
      </p>

      <p className="policy-item-heading">
        Data Sharing: <br />
        <p className="policy-item-description">
          Data may be shared with third-party service providers for business
          operations, with user consent, or to comply with legal obligations.
        </p>
      </p>

      <p className="policy-item-heading">
        User Rights: <br />
        <p className="policy-item-description">
          Types of data collected include personal information (such as name,
          email address, phone number) and usage data (such as browsing history,
          IP address).
        </p>
      </p>

      <p className="policy-item-heading">
        User Rights: <br />
        <p className="policy-item-description">
          User data is protected using encryption, secure servers, and access
          control mechanisms. Regular audits and security updates are conducted.
        </p>
      </p>

      <a href="/" className="next-link">
        Privacy Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default PrivacyPolicy;
