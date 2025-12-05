import "../../styles/timeline.css";

export default function Experience() {
  return (
    <div style={{ padding: "40px" }} className="mobile-fade-slide">
      <h1 style={{ marginBottom: "25px" }}>Experience</h1>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-date">2023 — Present</div>
          <div className="timeline-text">
            Frontend Developer — Next.js, React, UI Design.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2021 — 2023</div>
          <div className="timeline-text">
            Web Developer — HTML/CSS/JS + backend basics.
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2019 — 2021</div>
          <div className="timeline-text">
            Junior Developer — small projects and internships.
          </div>
        </div>

      </div>
    </div>
  );
}
