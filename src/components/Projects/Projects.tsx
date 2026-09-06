import "./Projects.css";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <h1 className="title">Projects</h1>
      <div className="content">
        <div className="project">
          <h2 className="project-title">
            Fabflix Movie Web App - Course Project
          </h2>
          <h3 className="project-subtitle">
            Backend Developer, October 2023 - December 2023
          </h3>
          <div className="project-description">
            <ul>
              <li>
                Developed full-stack architecture with AWS, MySQL, Tomcat, and
                JDBC, including a web and Android frontend using Java,
                JavaScript, jQuery, AJAX, and RESTful APIs.
              </li>
              <li>
                Expanded the movie database size by 100% by developing an ETL
                pipeline to parse XML files and storing parsed data into the
                database.
              </li>
              <li>
                Increased user experience and application security by
                Implementing features utilizing HTTPS, cookies, reCAPTCHA bot
                detection, and SQL injection protection.
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <h2 className="project-title">
            Cyber Verification Lab - Capstone Project Sponsored by RTX
          </h2>
          <h3 className="project-subtitle">
            Backend Developer, January 2024 - June 2024
          </h3>
          <div className="project-description">
            <ul>
              <li>
                Developed a web application for streamlining the supply chain
                security verification process using the MERN stack.
              </li>
              <li>
                Developed multiple features for data management, tracking
                assets, employee roles, and verification processes to
                consolidate multiple security teams into one centralized
                platform.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
