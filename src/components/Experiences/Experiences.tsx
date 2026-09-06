import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="section" id="experiences">
      <h1 className="title">Experiences</h1>
      <div className="content">
        <div className="experience">
          <h2 className="experience-title">
            Business Intelligence Development Intern
          </h2>
          <h3 className="experience-subtitle">
            Temco Logistics, Pomona, CA, June 2024 - December 2024
          </h3>
          <div className="experience-description">
            <ul>
              <li>
                Created two responsive, scalable web applications using C#,
                ASP.NET, MySQL, Azure, and Bootstrap.js.
              </li>
              <li>
                Streamlined daily business operations and eliminated 8 hours of
                weekly manual administrative work for thousands of drivers and
                managers nationwide.
              </li>
              <li>
                Presented project updates and functionality to upper management
                weekly.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <h2 className="experience-title">Tutor</h2>
          <h3 className="experience-subtitle">
            Transcontinental Education, Irvine, CA, September 2023 - February
            2024
          </h3>
          <div className="experience-description">
            <ul>
              <li>
                Created tailored lesson plans and adjusted methods based on
                feedback for 2 students.
              </li>
              <li>
                Helped students prepare for exams through concept reviews,
                problem-solving practices, and mock exams.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
