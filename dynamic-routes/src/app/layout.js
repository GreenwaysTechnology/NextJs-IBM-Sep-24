import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li><Link href="/todos">Todos</Link></li>
          </ul>
        </nav>
        <hr/>
        {children}
      </body>
    </html>
  );
}
