import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./index.css";

const InformationPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main-footer-container">
      <div className="info-page">
        <div className="info-container">
          <img
            className="image-logo"
            src="https://i.postimg.cc/T14sLhH5/logo.png"
            alt="logo"
          />
          <p>
            Welcome to Opam Technologies! With over 4 years of experience in the
            IT industry, we specialize in app and website development, UI/UX
            design, digital marketing, SEO optimization, and platform
            development including WordPress and Shopify Let's collaborate to
            elevate your brand's digital presence and drive success together!
          </p>
          <div className="social-icon">
            <div className="icons">
              <Link to="#">
                <CiFacebook />
              </Link>
            </div>
            <div className="icons">
              <a href="https://www.linkedin.com/company/opam-technologies/">
                <FaLinkedin />
              </a>
            </div>
            <div className="icons">
              <a href=" https://x.com/OpamTechnology?t=uNPGLpOVjEe6_2SSj07YCA&s=08">
                <FaXTwitter />
              </a>
            </div>
            <div className="icons">
              <a href="https://www.instagram.com/opamtechnology?igsh=MWNxc3F5eHkzcWY5MQ==">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1>IT Services</h1>
          <p className="info-container-para">Software Development</p>
          <p className="info-container-para">Web Development</p>
          <p className="info-container-para">Analytic Solutions</p>
          <p className="info-container-para">Cloud and DevOps</p>
          <p className="info-container-para">Product Design</p>
        </div>
        <div className="info-container">
          <h1>Contact Info</h1>
          <div className="info-container-details">
            <div className="info-icon">
              <CiLocationOn />
            </div>
            <div>
              <p>Prayagraj,</p>
              <p>UP India 211012</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div>
              <p>+919004504998</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <MdOutlineEmail />
            </div>
            <div>
              <p>info@opamtech.co.in</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaLink />
            </div>
            <div>
              <p>https://opamtech.co.in</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaRegClock />
            </div>
            <div>
              <p>10:00 AM to 6:00 PM Mon to Sat.</p>
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1>News Letter</h1>
          <p>
            We denounce with righteous indignation in and dislike men who are so
            beguiled and to demo realized.
          </p>
          <div className="email-newsletter">
            <input
              className="news-letter"
              type="email"
              placeholder="email"
              required
            />
            <button className="newsletterbtn">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div>
          <p>
            @2024 All Rights Reserved. Design & Development by Opam Technologies
          </p>
        </div>
        <div className="footer-routes">
          <div>
            <p onClick="#">Home</p>
          </div>
          <div>
            <p onClick="#">About</p>
          </div>
          <div>
            <p onClick="#">Blog</p>
          </div>
          <div>
            <p onClick="#">Shop</p>
          </div>
          <div>
            <p onClick="#">FAQ</p>
          </div>

          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Policy
            </button>

            {isOpen && (
              <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
                <HashLink to="/policies#sectionPrivacyPolicy">
                  Privacy Policy
                </HashLink>
                <HashLink to="/policies#sectionTermsOfService">
                  Terms of Service
                </HashLink>
                <HashLink to="/policies#sectionCookiePolicy">
                  Cookie Policy
                </HashLink>
                <HashLink to="/policies#sectionDataSecurityPolicy">
                  Data Security Policy
                </HashLink>
                <HashLink to="/policies#sectionRefundPolicy">
                  Refund Policy
                </HashLink>
                <HashLink to="/policies#sectionAccessabilityPolicy">
                  Accessibility Policy
                </HashLink>
                <HashLink to="/policies#sectionAcceptablePolicy">
                  Acceptable Use Policy
                </HashLink>
                <HashLink to="/policies#sectiongdprCompilance">
                  GDPR Compliance
                </HashLink>
                <HashLink to="/policies#sectionClientPrivacyPolicy">
                  Client Privacy Policy
                </HashLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
