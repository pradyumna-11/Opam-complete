import { Link } from "react-router-dom";
import "./index.css";

const InternshipPage = () => (
  <div className="main-bg">
    <div className="internship-home">
      <div className="home-contents">
        <h1 className="internship-home-heading">OPAM : Dream Construct Lead</h1>
        <p className="internship-home-description">
          Providing internships to students
        </p>
        <button className="internship-register-button">Register Here</button>
      </div>
    </div>

    <div className="internships-section">
      <h2 className="internship-section-heading">Internships We Offer</h2>
      <p className="internship-section-description">
        Explore our internship programs designed to nurture your passion for
        technology and equip you with the skills to shape the future.
      </p>
      <div className="internship-section-cards-container">
        <div className="internship-section-card">
          <h2 className="internship-section-card-heading">Web Development</h2>
          <p className="internship-section-card-description">
            Hands-on experience with real world projects. Explore html, css,
            javascript, reactjs and other frameworks.
          </p>
        </div>

        <div className="internship-section-card">
          <h2 className="internship-section-card-heading">Python</h2>
          <p className="internship-section-card-description">
            Explore the field of AI and Machine Learning with python. Work on
            datasets and generate AI models.
          </p>
        </div>

        <div className="internship-section-card">
          <h2 className="internship-section-card-heading">Android</h2>
          <p className="internship-section-card-description">
            Develop Android Apps using native platforms. Develop skills to
            thrive in the competitive market.
          </p>
        </div>
      </div>
    </div>

    <div className="internship-footer">
      <h2 className="internship-footer-heading">About Us</h2>
      <Link className="privacy-link" to="/policies">
        Privacy Policy
      </Link>
      <div className="internship-footer-buttons-container">
        <button className="internship-footer-button">
          <Link to="#" className="social-media-link">
            <i className="fa-brands fa-facebook icon"></i>
          </Link>
        </button>

        <button className="internship-footer-button">
          <a
            href="https://www.instagram.com/opamtechnology?igsh=MWNxc3F5eHkzcWY5MQ=="
            className="social-media-link"
          >
            <i className="fa-brands fa-instagram icon"></i>
          </a>
        </button>

        <button className="internship-footer-button">
          <Link to="#" className="social-media-link">
            <i className="fa-brands fa-telegram icon"></i>
          </Link>
        </button>

        <button className="internship-footer-button">
          <a
            href="https://www.linkedin.com/company/opam-technologies/"
            className="social-media-link"
          >
            <i className="fa-brands fa-linkedin icon"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default InternshipPage;
