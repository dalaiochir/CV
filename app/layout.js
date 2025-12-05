import "./globals.css";

export const metadata = {
  title: "My CV Website",
  description: "Next.js CV Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-animate">
        {children}
      </body>
    </html>
  );
}
