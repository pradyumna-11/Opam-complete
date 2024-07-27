import Header from "../Header";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Portfolios from "../Portfolios";
import Team from "../Team";
import Projects from "../Projects";
import Blog from "../Blog";
import Inquiries from "../Inquiries";
import ContactForm from "../ContactForm/ContactForm";
import InformationPage from "../InformationPage/InformationPage";

import "./index.css";

const HomePage = () => (
  <div className="bg">
    <Header />
    <Home />
    <About />
    <Services />
    <Portfolios />
    <Team />
    <Projects />
    <Blog />
    <Inquiries />
    <ContactForm />
    <InformationPage />
  </div>
);

export default HomePage;
