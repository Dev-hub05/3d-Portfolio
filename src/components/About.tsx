import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/Image.png" alt="Satdev Sharma" />
          <div className="image-glow"></div>
        </div>
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            I’m a Computer Science undergraduate with a strong academic record and hands-on experience in web development.
            Proficient in Java, Python, C++ and modern web technologies with practical exposure to database management.
            Demonstrated ability to build scalable applications through academic projects, complemented by certifications in OOPs,
            Data science and AI, seeking opportunities to apply technical and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
