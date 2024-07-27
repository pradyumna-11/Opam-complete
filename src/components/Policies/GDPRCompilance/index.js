import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const GDPRCompilance = () => (
  <div className="gdpr-compilance-background-main" id="sectiongdprCompilance">
    <div className="gdpr-compilance-container">
      <p className="gdpr-compilance-item-heading">
        Data Subject Rights: <br />
        <p className="gdpr-compilance-item-description">
          Users have rights to access, rectify, erase, restrict processing, and
          data portability.
        </p>
      </p>

      <p className="gdpr-compilance-item-heading">
        Legal Basis: <br />
        <p className="gdpr-compilance-item-description">
          Data processing is based on user consent, contractual necessity, or
          legitimate interest.
        </p>
      </p>

      <p className="gdpr-compilance-item-heading">
        Data Transfers: <br />
        <p className="gdpr-compilance-item-description">
          Data transferred outside the EU is protected by appropriate safeguards
          such as standard contractual clauses.
        </p>
      </p>

      <p className="gdpr-compilance-item-heading">
        Contact Information:
        <br />
        <p className="gdpr-compilance-item-description">
          Users can contact the company's Data Protection Officer via email at
          info@opamtech.co.in for GDPR-related inquiries.
        </p>
      </p>

      <a href="/" className="next-link">
        GDPR Compilance Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default GDPRCompilance;
