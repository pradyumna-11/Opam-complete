import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const TermsOfService = () => (
  <div className="tos-background-main" id="sectionTermsOfService">
    <div className="tos-container">
      <p className="tos-item-heading">
        User Responsibilities: <br />
        <p className="tos-item-description">
          Users must provide accurate information, respect intellectual
          property, and refrain from illegal activities.
        </p>
      </p>

      <p className="tos-item-heading">
        Data Usage: <br />
        <p className="tos-item-description">
          Collected data is used to improve service quality, for marketing
          purposes, to personalize user experience, and for analytics.
        </p>
      </p>

      <p className="tos-item-heading">
        Service Availability: <br />
        <p className="tos-item-description">
          Services are provided on an "as-is" basis. The company strives for
          high availability but does not guarantee uninterrupted service.
        </p>
      </p>

      <p className="tos-item-heading">
        User Rights: <br />
        <p className="tos-item-description">
          Types of data collected include personal information (such as name,
          email address, phone number) and usage data (such as browsing history,
          IP address).
        </p>
      </p>

      <p className="tos-item-heading">
        Intellectual Property: <br />
        <p className="tos-item-description">
          All content and software are owned by the company. Users are granted a
          limited license to use the services according to the terms.
        </p>
      </p>

      <p className="tos-item-heading">
        Dispute Resolution: <br />
        <p className="tos-item-description">
          Disputes will be resolved through arbitration in accordance with
          specified procedures. Users waive the right to participate in class
          actions.
        </p>
      </p>

      <p className="tos-item-heading">
        Termination: <br />
        <p className="tos-item-description">
          Services may be terminated if users violate the terms, misuse the
          services, or if the company decides to discontinue the services.
        </p>
      </p>

      <a href="/" className="next-link">
        Terms Of Service <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default TermsOfService;
