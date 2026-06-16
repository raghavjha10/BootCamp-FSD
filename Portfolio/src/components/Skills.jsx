function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
  ];

  return (
    <section
      className="skills section"
      id="skills"
    >
      <div className="container">
        <h2>Skills</h2>

        <div className="skill-list">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-item"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;