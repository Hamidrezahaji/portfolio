import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${scrolling ? "text-gray-900" : "text-black"}`}>
          Hamidreza Haji
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#projects" className={`text-lg ${scrolling ? "text-gray-900" : "text-black"} hover:underline`}>
            Projekte
          </Link>
          <Link href="#about" className={`text-lg ${scrolling ? "text-gray-900" : "text-black"} hover:underline`}>
            Über mich
          </Link>
          <Link href="#contact" className={`text-lg ${scrolling ? "text-gray-900" : "text-black"} hover:underline`}>
            Kontakt
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`text-2xl transition-all duration-300 ${
              scrolling ? "text-gray-900" : "text-black"
            }`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg flex flex-col items-center justify-center space-y-6 text-lg"
          >
            <Link href="#projects" className="text-gray-900 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Projekte
            </Link>
            <Link href="#about" className="text-gray-900 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Über mich
            </Link>
            <Link href="#contact" className="text-gray-900 hover:underline" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700 text-2xl mt-4">
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}