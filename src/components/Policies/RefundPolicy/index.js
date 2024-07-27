import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const RefundPolicy = () => (
  <div className="refund-policy-background-main" id="sectionRefundPolicy">
    <div className="refund-policy-container">
      <p className="refund-policy-item-heading">
        Eligibility <br />
        <p className="refund-policy-item-description">
          Refunds are granted for technical issues, dissatisfaction within 30
          days of purchase, or accidental charges.
        </p>
      </p>

      <p className="refund-policy-item-heading">
        Process <br />
        <p className="refund-policy-item-description">
          To request a refund, users must contact customer support with their
          order details. Refunds are processed within 7-14 business days.
        </p>
      </p>

      <p className="refund-policy-item-heading">
        Exceptions : <br />
        <p className="refund-policy-item-description">
          No refunds are provided for digital products once downloaded or for
          services already rendered.
        </p>
      </p>

      <a href="/" className="next-link">
        Refund Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default RefundPolicy;
