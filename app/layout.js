import "./ui/globals.css";

export const metadata = {
  title: "Dashboard Next.js Admin Dashboard",
  description: "Next.js 14 Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
