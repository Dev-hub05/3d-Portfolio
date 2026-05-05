import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Unified University Management Platform</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a fully integrated university web application acting as a one-stop digital platform.
              Architected 15+ RESTful APIs and integrated JWT-based authentication, reducing unauthorized access risk by 35%.
              Structured scalable database schema handling 100+ records efficiently with improved retrieval speed.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>MindHaven Website</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Built a browser-based digital well-being platform integrating mood tracking, digital journal, and blogging.
              Improved UI responsiveness and usability, enhancing interaction efficiency by 20%.
              Reduced server response time by 25% through backend optimization and efficient routing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Hospital Management System</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Designed and implemented a Hospital Management System using HTML, CSS, JavaScript, and MySQL, reducing manual record handling by 40%.
              Integrated dynamic frontend-backend communication enabling real-time data updates.
              Normalized database schema and indexing improved query execution speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
