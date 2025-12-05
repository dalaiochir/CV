import "./../styles/globals.css";
import "./../styles/layout.css";
import "./../styles/navbar.css";
import Link from "next/link";

export const metadata = {
  title: "My CV Website",
  description: "Personal CV website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="nav-logo">MyCV</div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main className="content">{children}</main>
        <footer className="footer">© 2025 My CV Website</footer>
      </body>
    </html>
  );
}
