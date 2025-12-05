export default function Experience() {
  return (
    <div className="exp-container">
      <h1 className="title">Work Experience</h1>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Frontend Developer — 2024</h2>
            <p>React, Next.js дээр компанийн вэб систем хөгжүүлсэн.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Backend Developer — 2023</h2>
            <p>Node.js, Express ашиглан API хөгжүүлэлт хийсэн.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>Intern Developer — 2022</h2>
            <p>Багаар ажиллах чадвараа сайжруулж, рефакторинг хийж сурсан.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
