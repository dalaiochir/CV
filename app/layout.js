export const metadata = {
  title: "Dalaiochir | CV Website",
  description: "Personal CV website built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/experience">Experience</a>
          <a href="/contact">Contact</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
