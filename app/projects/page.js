export default function Projects() {
  return (
    <div className="projects-container">
      <h1 className="title">My Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>Next.js + CSS ашиглан бүтээгдсэн хувийн CV сайт.</p>
        </div>

        <div className="project-card">
          <h2>Task Manager App</h2>
          <p>CRUD бүхий Productivity App (React + Node).</p>
        </div>

        <div className="project-card">
          <h2>Game Stats Tracker</h2>
          <p>API ашиглан тоглоомын статистик уншдаг сайт.</p>
        </div>

      </div>
    </div>
  );
}
