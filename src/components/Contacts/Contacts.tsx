import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="section" id="contacts">
      <h1 className="title">Contacts</h1>
      <div className="content">
        <a
          href="https://www.linkedin.com/in/seraphinewu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/serisummer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="mailto:seraphinewwu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
