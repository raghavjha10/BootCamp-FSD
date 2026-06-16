function Projects() {
  return (
    <section
      className="projects section"
      id="projects"
    >
      <div className="container">
        <h2>Projects</h2>

        <div className="card-list">

          <div className="card">
            <h3>AccuLedger</h3>
            <p>
              Web based accounting system
              using PHP and MySQL.
            </p>
          </div>

          <div className="card">
            <h3>
              Face Recognition Attendance
            </h3>
            <p>
              Attendance system using
              image verification.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;