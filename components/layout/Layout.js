// components/layout/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-secondary py-4 px-8 border-b border-gray-700">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Hamidreza Haji</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2023 Hamidreza Haji. All rights reserved.</p>
      </footer>
    </div>
  );
}