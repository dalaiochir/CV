export default function Skills() {
  return (
    <div className="skills-container">
      <h1 className="title">My Skills</h1>

      <div className="skill-bar">
        <span>JavaScript</span>
        <div className="bar"><div className="progress" style={{ width: "90%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Next.js</span>
        <div className="bar"><div className="progress" style={{ width: "85%" }}></div></div>
      </div>

      <div className="skill-bar">
        <span>Node.js</span>
        <div className="bar"><div className="progress" style={{ width: "80%" }}></div></div>
      </div>

      <div className="badges">
        <span className="badge">React</span>
        <span className="badge">Express</span>
        <span className="badge">MongoDB</span>
        <span className="badge">MySQL</span>
        <span className="badge">Git</span>
      </div>
    </div>
  );
}
