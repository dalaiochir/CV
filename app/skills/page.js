"use client";
import { useEffect } from "react";
import "../../styles/skills.css";

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-progress");
    bars.forEach((bar) => {
      bar.classList.add("skill-animate");
    });
  }, []);

  return (
    <div className="mobile-fade-slide" style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Skills</h1>

      <div className="skill-wrapper">
        <div className="skill-name">JavaScript</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ "--value": "85%" }}></div>
        </div>
      </div>

      <div className="skill-wrapper">
        <div className="skill-name">React</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ "--value": "80%" }}></div>
        </div>
      </div>

      <div className="skill-wrapper">
        <div className="skill-name">Next.js</div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ "--value": "75%" }}></div>
        </div>
      </div>
    </div>
  );
}
