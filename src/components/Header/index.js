import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

/*
<nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718185704/327f0fa7e05733e7f22d51396ff821cb_y5iugk.png"
            alt="website logo"
          />
          <Link to = "/internship" className="internship-link">
          <button className="nav-mobile-internship-btn">InternShip</button>
          </Link>
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718185704/327f0fa7e05733e7f22d51396ff821cb_y5iugk.png"
            alt="website logo"
          />

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <a href="#sectionHome" className="link">
                Home
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionAbout" className="link">
                About
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionServices" className="link">
                Services
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionPortfolios" className="link">
                Portfolios
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionTeam" className="link">
                Team
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionBlog" className="link">
                Blog
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionContact" className="link">
                Contact
              </a>
            </li>

            <li className="nav-menu-item">
              <a href="#sectionHome" className="link">
                Product
              </a>
            </li>
          </ul>
          <Link to = "/internship" >
          <button className="internship-btn">InternShip</button>
          </Link>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <a href="#sectionHome" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260178/1708979-200_qbtzss.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionAbout" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260370/5759782-200_rdp75t.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionServices" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718260930/4235376-200_mrytvk.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionPortfolios" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261268/6441181-200_egwa9k.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionTeam" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261366/6571675-200_nsn0nm.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionBlog" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261520/6731475-200_ulmxqz.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="#sectionContact" className="link">
              <img
                src="https://res.cloudinary.com/dttnhad6r/image/upload/v1718261652/5171448-200_chbqre.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>

          <li className="nav-menu-item-mobile">
            <a href="sectionHome" className="link">
              <img
                src="https://res.cloudinary.com/daxizvsge/image/upload/v1718366537/Screenshot_2024-06-14_173149_xggg5h.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
*/

const Header = () => {
  const [showSmallNav, toggleSmallNav] = useState(false);

  const changeToggleNav = () => {
    toggleSmallNav((prevState) => !prevState);
  };

  return (
    <nav className="header">
      <div className="header-inner-large">
        <img
          src="https://res.cloudinary.com/daxizvsge/image/upload/v1720595613/Screenshot_2024-07-10_124251_yi16zd.png"
          alt="opam-logo"
          className="opam-logo"
        />
        <ul className="large-header-navigations-container">
          <li className="navigation-item">
            <a className="nav-link" href="#sectionHome">
              Home
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionAbout">
              About
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionServices">
              Services
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionPortfolios">
              Portfolios
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionTeam">
              Team
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionBlog">
              Blog
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionContact">
              Contact
            </a>
          </li>

          <li className="navigation-item">
            <a className="nav-link" href="#sectionAbout">
              Product
            </a>
          </li>

          <li className="navigation-item">
            <Link to="/internship" className="internship-link">
              <a className="nav-link" href="#sectionAbout">
                Internship
              </a>
            </Link>
          </li>
        </ul>
        <a href="#sectionContact" className="get-quote-link">
          <button className="get-a-quote-button">Get a quote</button>
        </a>

        <button className="menu-button" onClick={() => changeToggleNav()}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <ul
        className={
          showSmallNav ? "small-header-navigations-container" : "close"
        }
      >
        <li className="navigation-item">
          <a className="nav-link" href="#sectionHome">
            Home
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionAbout">
            About
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionServices">
            Services
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionPortfolios">
            Portfolios
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionTeam">
            Team
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionBlog">
            Blog
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionContact">
            Contact
          </a>
        </li>

        <li className="navigation-item">
          <a className="nav-link" href="#sectionAbout">
            Product
          </a>
        </li>
        <li className="navigation-item">
          <Link to="/internship" className="internship-link">
            <a className="nav-link" href="#sectionAbout">
              Internship
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
