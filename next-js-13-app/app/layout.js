import "../styles/globals.css";
import { Navigation } from "./components/Navigation";

export const metadata = {
  title: "My first app with Next 13",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
