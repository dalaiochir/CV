export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Б. ДалайОчир</h1>
        <h2 className="hero-subtitle">Full-Stack Developer & CS Student</h2>

        <p className="hero-text">
          Welcome to my personal CV website!  
          I love building modern web applications,  
          learning new technologies, and solving real-world problems.
        </p>

        <a href="/profile" className="hero-btn">View My Profile</a>
      </div>

      <div className="hero-image-box">
        <img src="/profile.jpg" alt="Profile" className="hero-image" />
      </div>
    </section>
  );
}
