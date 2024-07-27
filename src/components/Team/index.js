import "./index.css";

const Team = () => (
  <div className="team-container" id="sectionTeam">
    <p className="team-text">TEAM</p>
    <h3 className="team-section-heading">Expert IT Consultants</h3>
    <p className="team-section-description">
      We've been building creative tools together for over a decade and have a
      deep appreciation for software applications.
    </p>
    <div className="team-cards-container">
      <div className="team-card">
        <img
          src="https://res.cloudinary.com/daxizvsge/image/upload/v1719993684/WhatsApp_Image_2024-07-03_at_1.30.23_PM_fothoi.jpg"
          alt="team-img"
          className="team-img circle"
        />
        <h4 className="team-head-name">Neeti Verma</h4>
        <p className="team-head-role">Founder & COO</p>
        <hr className="line" />
      </div>

      <div className="team-card">
        <img
          src="https://res.cloudinary.com/daxizvsge/image/upload/v1718275452/Screenshot_2024-06-13_161319_rr40du.png"
          alt="team-img"
          className="team-img"
        />
        <h4 className="team-head-name">Jatin Dubey</h4>
        <p className="team-head-role">Founder & CEO</p>
        <hr className="line" />
      </div>

      <div className="team-card">
        <img
          src="https://res.cloudinary.com/daxizvsge/image/upload/v1719974332/IMG_20240321_202004_gniu8q.jpg"
          alt="team-img"
          className="team-img circle"
        />
        <h4 className="team-head-name">Anmol Jaiswal</h4>
        <p className="team-head-role">Founder & CMO</p>
        <hr className="line" />
      </div>
    </div>
  </div>
);

export default Team;
