import { GrFormNextLink } from "react-icons/gr";
import "./index.css";

const CookiePolicy = () => (
  <div className="cookie-policy-background-main" id="sectionCookiePolicy">
    <div className="cookie-policy-container">
      <p className="cookie-policy-item-heading">
        Types of Cookies: <br />
        <p className="cookie-policy-item-description">
          Session cookies, persistent cookies, and third-party cookies are used.
        </p>
      </p>

      <p className="cookie-policy-item-heading">
        Purpose of Cookies: <br />
        <p className="cookie-policy-item-description">
          Cookies are used to save user preferences, improve website
          functionality, and perform analytics.
        </p>
      </p>

      <p className="cookie-policy-item-heading">
        Data Sharing: <br />
        <p className="cookie-policy-item-description">
          Data may be shared with third-party service providers for business
          operations, with user consent, or to comply with legal obligations.
        </p>
      </p>

      <p className="cookie-policy-item-heading">
        Managing Cookies: <br />
        <p className="cookie-policy-item-description">
          Users can manage or disable cookies through their browser settings.
          Instructions for popular browsers are provided
        </p>
      </p>

      <a href="/" className="next-link">
        Cookie Policy <GrFormNextLink />
      </a>
    </div>
  </div>
);

export default CookiePolicy;
