import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="container">
        <img src={profile} alt="profile" />

        <div className="home-content">
          <p className="welcome-text">
            Welcome to my Portfolio
          </p>

          <h1 className="typing">
            I am Raghav Kumar Jha
          </h1>

          <p>
            Full Stack Developer and
            B.Tech CSE Student
          </p>

          <div className="resume-buttons">
            <a
              href={resume}
              download
              className="btn-download"
            >
              Download Resume
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="btn-view"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;