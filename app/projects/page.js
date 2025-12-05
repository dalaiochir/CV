import "../../styles/globals.css";

export default function Projects() {
  return (
    <div style={{ padding: "40px" }} className="mobile-fade-slide">
      <h1 style={{ marginBottom: "25px" }}>Projects</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>Next.js ашиглан хийсэн хувийн веб.</p>
        </div>

        <div className="project-card">
          <h2>Todo App</h2>
          <p>React state management туршилтын проект.</p>
        </div>

        <div className="project-card">
          <h2>Game Dashboard</h2>
          <p>API data fetch + UI дизайн.</p>
        </div>
      </div>
    </div>
  );
}
